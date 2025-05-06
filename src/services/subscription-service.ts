import { apiRequest } from '../core/api';
import { ApiContext } from '../types/common-types';
import { CreateSubscriptionParams, UpdateSubscriptionParams } from '../types/subscription-types';

export const getSubscriptions = (
  context: ApiContext,
  filters?: { subscriptionPlanId?: string; status?: string }
) => {
  const query = new URLSearchParams();
  if (filters?.subscriptionPlanId) query.append('subscription_plan_id', filters.subscriptionPlanId);
  if (filters?.status) query.append('status', filters.status);

  const endpoint = `/subscriptions${query.toString() ? `?${query.toString()}` : ''}`;

  return apiRequest(context, {
    endpoint,
    method: 'GET',
    authType: 'JWT'
  });
};

export const createSubscription = (
  context: ApiContext,
  subscriptionData: CreateSubscriptionParams
) => {
  return apiRequest(context, {
    endpoint: '/subscriptions',
    method: 'POST',
    data: subscriptionData,
    authType: 'JWT'
  });
};

export const getSubscriptionById = (
  context: ApiContext,
  subscriptionId: string
) => {
  if (!subscriptionId) throw new Error('Subscription ID is required.');

  return apiRequest(context, {
    endpoint: `/subscriptions/${subscriptionId}`,
    method: 'GET',
    authType: 'JWT'
  });
};

export const updateSubscription = (
  context: ApiContext,
  subscriptionId: string,
  subscriptionData: UpdateSubscriptionParams
) => {
  return apiRequest(context, {
    endpoint: `/subscriptions/${subscriptionId}`,
    method: 'PUT',
    data: {
      subscriber_name: subscriptionData.subscriberName,
      subscriber_reference: subscriptionData.subscriberReference,
      amount: subscriptionData.amount,
      next_billing_amount: subscriptionData.nextBillingAmount,
      next_billing_date: subscriptionData.nextBillingDate?.toISOString().split('T')[0]
    },
    authType: 'JWT'
  });
};

export const getSubscriptionPayments = (
  context: ApiContext,
  subscriptionId: string
) => {
  if (!subscriptionId) throw new Error('Subscription ID is required.');

  return apiRequest(context, {
    endpoint: `/subscriptions/${subscriptionId}/payments`,
    method: 'GET',
    authType: 'JWT'
  });
};

export const getSubscriptionCards = (
  context: ApiContext,
  subscriptionId: string
) => {
  if (!subscriptionId) throw new Error('Subscription ID is required.');

  return apiRequest(context, {
    endpoint: `/subscriptions/${subscriptionId}/cards`,
    method: 'GET',
    authType: 'JWT'
  });
};

export const updateSubscriptionStatus = (
  context: ApiContext,
  subscriptionId: string,
  action: 'active' | 'paused' | 'cancel'
) => {
  if (!subscriptionId) throw new Error('Subscription ID is required.');
  if (!['active', 'paused', 'cancel'].includes(action)) {
    throw new Error('Invalid action. Valid values are: active, paused, cancel.');
  }

  return apiRequest(context, {
    endpoint: `/subscriptions/${subscriptionId}/status`,
    method: 'POST',
    data: { action },
    authType: 'JWT'
  });
};
