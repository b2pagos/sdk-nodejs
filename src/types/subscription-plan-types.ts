export interface CreateOrUpdateSubscriptionPlanParams {
    name: string;
    description?: string;
    price: number;
    currency: string;
    interval: 'daily' | 'weekly' | 'monthly' | 'yearly';
    intervalCount: number;
    allowProrate?: 'up' | 'down' | 'none';
    freeDays?: number;
    billingDay?: number;
    redirectUrl?: string;
}