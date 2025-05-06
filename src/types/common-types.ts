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

export interface PaymentParams {
    amount: number;
    currency: string;
    paymentMethodId: string;
    description?: string;
    metadata?: Record<string, any>;
}

// 🔹 Detalles de un suscriptor (response simplificado)
export interface SubscriberDetails {
    id: string;
    name: string;
    email: string;
    subscriptionPlanId: string;
    createdAt: string;
    status: 'active' | 'paused' | 'canceled';
}

// 🔹 Pago relacionado a suscriptor
export interface SubscriptionPayment {
    id: string;
    amount: number;
    currency: string;
    status: string;
    paidAt: string;
}

export interface SubscriptionServiceContext {
    baseUrl: string;
    jwt?: string;
    basicAuth?: {
        username: string;
        password: string;
    };
}

export interface ApiContext {
    pasarelaApi: string;
    accountKey: string;
    integrityKey: string;
    username: string;
    password: string;
    rejectUnauthorizedSSL?: boolean;
}

export type B2PClientOptions = ApiContext;

