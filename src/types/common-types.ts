export interface B2POptions {
    username: string;
    password: string;
    accountKey: string;
    integrityKey: string;
    pasarelaApi: string;
    rejectUnauthorizedSSL?: boolean;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ApiRequestOptions {
    endpoint: string;
    method: HttpMethod;
    data?: any;
    authType: 'JWT' | 'USERPASS';
}

export interface CardData {
    creditCardNumber: string;
    creditCardExpirationDate: string;
    creditCardSecurityCode: string;
}

export interface CreateSubscriptionParams {
    customerId: string;
    planId: string;
    startDate: string;
    metadata?: Record<string, any>;
}

export interface PaymentParams {
    amount: number;
    currency: string;
    paymentMethodId: string;
    description?: string;
    metadata?: Record<string, any>;
}
