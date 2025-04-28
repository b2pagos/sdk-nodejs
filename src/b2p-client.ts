import { Agent } from 'https';
import axios, { AxiosInstance } from 'axios';
import * as jwt from 'jsonwebtoken';
import { encryptRSA, getPublicKey } from './utils/encryption-utils';
import { generateSignature } from './utils/signature-utils';
import { ApiRequestOptions, B2POptions, CardData, CreateSubscriptionParams, PaymentParams } from './types/common-types';

export class B2PClient {
    private accountKey: string;
    private integrityKey: string;
    private username: string;
    private password: string;
    private pasarelaApi: string;
    private httpsAgent: Agent;
    private axiosInstance: AxiosInstance;
    private token: string | undefined;

    constructor(options: B2POptions) {
        this.accountKey = options.accountKey;
        this.integrityKey = options.integrityKey;
        this.username = options.username;
        this.password = options.password;
        this.pasarelaApi = options.pasarelaApi;

        this.httpsAgent = new Agent({ rejectUnauthorized: options.rejectUnauthorizedSSL ?? true });
        this.axiosInstance = axios.create({ httpsAgent: this.httpsAgent });
    }

    async encryptCardData(cardData: CardData) {
        const publicKey = await getPublicKey(this.pasarelaApi);
        return {
            creditcard_number: encryptRSA(cardData.creditCardNumber, publicKey),
            creditcard_expirationdate: encryptRSA(cardData.creditCardExpirationDate, publicKey),
            creditcard_securitycode: encryptRSA(cardData.creditCardSecurityCode, publicKey)
        };
    }

    async createSubscription(subscriptionData: CreateSubscriptionParams) {
        return this.apiRequest({
            endpoint: '/subscriptions',
            method: 'POST',
            data: subscriptionData,
            authType: 'JWT'
        });
    }

    async capturePayment(paymentData: PaymentParams) {
        return this.apiRequest({
            endpoint: '/payments/capture',
            method: 'POST',
            data: paymentData,
            authType: 'JWT'
        });
    }

    async cancelSubscription(subscriptionId: string) {
        return this.apiRequest({
            endpoint: `/subscriptions/${subscriptionId}`,
            method: 'DELETE',
            authType: 'JWT'
        });
    }

    async refundPayment(paymentId: string) {
        return this.apiRequest({
            endpoint: `/payments/${paymentId}/refund`,
            method: 'POST',
            authType: 'JWT'
        });
    }

    async createTransaction(transactionData: {
        accountId: string;
        reference: string;
        description: string;
        amount: number;
        taxValue: number;
        taxBase: number;
        currency: string;
    }) {
        const payload = {
            account_id: transactionData.accountId,
            reference: transactionData.reference,
            description: transactionData.description,
            total: transactionData.amount,
            tax_value: transactionData.taxValue,
            tax_base: transactionData.taxBase,
            currency: transactionData.currency,
        };

        return this.apiRequest({
            endpoint: '/paymentLink/transaction',
            method: 'POST',
            data: payload,
            authType: 'USERPASS'
        });
    }

    async getAccounts() {
        return this.apiRequest({
            endpoint: '/accounts',
            method: 'GET',
            authType: 'USERPASS'
        });
    }

    private async getJwt(): Promise<string> {
        const payload = {
            account_key: this.accountKey,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 30,
        };
        return jwt.sign(payload, this.integrityKey, { algorithm: 'HS256' });
    }

    private async getUserToken(): Promise<string> {
        const response = await this.axiosInstance.post(`${this.pasarelaApi}/get-access-token`, {
            email: this.username,
            password: this.password
        });

        this.token = response.data.data;
        return this.token?.toString() || '';
    }

    private async apiRequest<T>({ endpoint, method, data, authType }: ApiRequestOptions): Promise<T> {
        const headers: Record<string, string> = {};

        if (authType === 'JWT') {
            headers['Authorization'] = `Bearer ${await this.getJwt()}`;
        } else if (authType === 'USERPASS') {
            headers['Authorization'] = `Bearer ${await this.getUserToken()}`;
        }

        const response = await this.axiosInstance.request<T>({
            url: `${this.pasarelaApi}${endpoint}`,
            method,
            data,
            headers
        });

        return response.data;
    }
}
