import { B2PClientOptions } from './types/common-types';

import * as SubscriptionService from './services/subscription-service';
import * as SubscriptionPlanService from './services/subscription-plan-service';
import * as CardService from './services/card-service';
import * as UserPassService from './services/userpass-service';

import { CreateSubscriptionParams, UpdateSubscriptionParams } from './types/subscription-types';
import { TokenizeCardParams } from './types/card-types';
import { CreateOrUpdateSubscriptionPlanParams } from './types/subscription-plan-types';
import { CreateOrUpdatePaymentLinkParams, CreateOrUpdateTransactionParams, CreatePaymentParams } from './types/userpass-types';

export class B2PClient {
    private readonly context: B2PClientOptions;

    constructor(options: B2PClientOptions) {
        this.context = options;
    }

    async getAccounts() {
        return UserPassService.getAccounts(this.context);
    }

    async getAccountByAccountKey() {
        return UserPassService.getAccountByAccountKey(this.context);
    }

    async getPaymentMethods(accountId: number) {
        return UserPassService.getPaymentMethods(this.context, accountId);
    }

    async getCurrencies() {
        return UserPassService.getCurrencies(this.context);
    }

    async getTaxes() {
        return UserPassService.getTaxes(this.context);
    }

    async getCountries() {
        return UserPassService.getCountries(this.context);
    }

    async getRegions(countryId: number) {
        return UserPassService.getRegions(this.context, countryId);
    }

    async getCities(countryId: number, regionId: number) {
        return UserPassService.getCities(this.context, countryId, regionId);
    }

    async getDocumentTypes() {
        return UserPassService.getDocumentTypes(this.context);
    }

    async getPseBanks() {
        return UserPassService.getPseBanks(this.context);
    }

    async getBanks() {
        return UserPassService.getBanks(this.context);
    }
    async getCiiuCodes() {
        return UserPassService.getCiiuCodes(this.context);
    }

    async createPaymentLink(data: CreateOrUpdatePaymentLinkParams) {
        return UserPassService.createPaymentLink(this.context, data);
    }

    async getPaymentLinks(accountId: number, page: number = 1) {
        return UserPassService.getPaymentLinks(this.context, accountId, page);
    }

    async createTransaction(data: CreateOrUpdateTransactionParams) {
        return UserPassService.createTransaction(this.context, data);
    }

    async createPayWithPSE(data: CreatePaymentParams) {
        return UserPassService.createPayWithPSE(this.context, data);
    }

    async getTransactionstatus(accountId: number, token: string) {
        return UserPassService.getTransactionstatus(this.context, accountId, token);
    }

    async getSubscriptionPlans(page: number = 1, limit: number = 10) {
        return SubscriptionPlanService.getSubscriptionPlans(this.context, page, limit);
    }

    async createSubscriptionPlan(plan: CreateOrUpdateSubscriptionPlanParams) {
        return SubscriptionPlanService.createSubscriptionPlan(this.context, plan);
    }

    async getSubscriptionPlanById(planId: string) {
        return SubscriptionPlanService.getSubscriptionPlanById(this.context, planId);
    }

    async updateSubscriptionPlan(planId: string, plan: CreateOrUpdateSubscriptionPlanParams) {
        return SubscriptionPlanService.updateSubscriptionPlan(this.context, planId, plan);
    }

    async deleteSubscriptionPlan(planId: string) {
        return SubscriptionPlanService.deleteSubscriptionPlan(this.context, planId);
    }

    async listTokenizedCards() {
        return CardService.listTokenizedCards(this.context);
    }

    async tokenizeCard(data: TokenizeCardParams) {
        return CardService.tokenizeCard(this.context, data);
    }

    async getTokenizedCard(tokenCard: string) {
        return CardService.getTokenizedCard(this.context, tokenCard);
    }

    async deleteTokenizedCard(tokenCard: string) {
        return CardService.deleteTokenizedCard(this.context, tokenCard);
    }

    async chargeTokenizedCard(tokenCard: string, payload: Record<string, any>) {
        return CardService.chargeTokenizedCard(this.context, tokenCard, payload);
    }

    async setPrimaryCard(tokenCard: string) {
        return CardService.setPrimaryCard(this.context, tokenCard);
    }

    async getSubscriptions(filters?: { subscriptionPlanId?: string; status?: string }) {
        return SubscriptionService.getSubscriptions(this.context, filters);
    }

    async createSubscription(data: CreateSubscriptionParams) {
        return SubscriptionService.createSubscription(this.context, data);
    }

    async getSubscriptionById(subscriptionId: string) {
        return SubscriptionService.getSubscriptionById(this.context, subscriptionId);
    }

    async updateSubscription(subscriptionId: string, data: UpdateSubscriptionParams) {
        return SubscriptionService.updateSubscription(this.context, subscriptionId, data);
    }

    async getSubscriptionPayments(subscriptionId: string) {
        return SubscriptionService.getSubscriptionPayments(this.context, subscriptionId);
    }

    async getSubscriptionCards(subscriptionId: string) {
        return SubscriptionService.getSubscriptionCards(this.context, subscriptionId);
    }

    async updateSubscriptionStatus(subscriptionId: string, action: 'active' | 'paused' | 'cancel') {
        return SubscriptionService.updateSubscriptionStatus(this.context, subscriptionId, action);
    }
}
