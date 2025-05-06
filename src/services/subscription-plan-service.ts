import { apiRequest } from '../core/api';
import { ApiContext } from '../types/common-types';
import { CreateOrUpdateSubscriptionPlanParams } from '../types/subscription-plan-types';
import { mapToApiPayload } from '../utils/plan-utils';


export const getSubscriptionPlans = async (
  context: ApiContext,
  page: number = 1,
  limit: number = 10
) => {
  return apiRequest(context, {
    endpoint: `/subscriptions/plans?page=${page}&limit=${limit}`,
    method: 'GET',
    authType: 'JWT'
  });
};

export const createSubscriptionPlan = async (
  context: ApiContext,
  plan: CreateOrUpdateSubscriptionPlanParams
) => {
  return apiRequest(context, {
    endpoint: '/subscriptions/plans',
    method: 'POST',
    data: mapToApiPayload(plan),
    authType: 'JWT'
  });
};

export const getSubscriptionPlanById = async (
  context: ApiContext,
  planId: string
) => {
  return apiRequest(context, {
    endpoint: `/subscriptions/plans/${planId}`,
    method: 'GET',
    authType: 'JWT'
  });
};

export const updateSubscriptionPlan = async (
  context: ApiContext,
  planId: string,
  plan: CreateOrUpdateSubscriptionPlanParams
) => {
  return apiRequest(context, {
    endpoint: `/subscriptions/plans/${planId}`,
    method: 'PUT',
    data: mapToApiPayload(plan),
    authType: 'JWT'
  });
};

export const deleteSubscriptionPlan = async (
  context: ApiContext,
  planId: string
) => {
  return apiRequest(context, {
    endpoint: `/subscriptions/plans/${planId}`,
    method: 'DELETE',
    authType: 'JWT'
  });
};
