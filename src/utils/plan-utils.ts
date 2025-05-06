import { CreateOrUpdateSubscriptionPlanParams } from "../types/subscription-plan-types";

export function mapToApiPayload(
  data: CreateOrUpdateSubscriptionPlanParams
): Record<string, any> {
  return {
    name: data.name,
    description: data.description,
    price: data.price,
    currency: data.currency,
    interval: data.interval,
    interval_count: data.intervalCount,
    allow_prorate: data.allowProrate,
    free_days: data.freeDays ?? 0,
    billing_day: data.billingDay,
    redirect_url: data.redirectUrl,
  };
}
