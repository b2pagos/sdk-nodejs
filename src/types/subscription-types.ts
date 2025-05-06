// 🔹 Crear suscripción
export interface CreateSubscriptionParams {
    subscriptionPlanId: string;
    subscriberName: string;
    subscriberEmail: string;
    tokenizedCardId: string;
}

// 🔹 Actualizar suscripción
export interface UpdateSubscriptionParams {
    subscriberName?: string;
    subscriberReference?: string;
    amount?: number;
    nextBillingAmount?: number;
    nextBillingDate?: Date;
    [key: string]: any;
}