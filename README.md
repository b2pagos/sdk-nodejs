# B2PAGOS SDK for Node.js

Node.js SDK to integrate with the **B2PAGOS** payment gateway easily and securely using TypeScript.

![npm version](https://img.shields.io/npm/v/b2pagos-sdk)
![license](https://img.shields.io/npm/l/b2pagos-sdk)

---

## ✨ Features

- 🔐 Token-based authentication (JWT / UserPass)
- 🧾 Create and manage subscriptions
- 💳 Tokenize and encrypt card data (RSA)
- 💸 Capture and refund payments
- 🌐 Generate payment links for transactions
- 🧠 Fully typed in TypeScript
- ⚙️ Compatible with Node.js v18+

---

## 📦 Installation

```bash
npm install b2pagos-sdk
# or
yarn add b2pagos-sdk
```

---

## 🚀 Quick Start

```typescript
import { B2PClient } from "b2pagos-sdk";

const client = new B2PClient({
  accountKey: "your-account-key",
  integrityKey: "your-integrity-key",
  username: "your-username",
  password: "your-password",
  pasarelaApi: "https://production.b2pagos.com/api/v1",
  rejectUnauthorizedSSL: false, // Set to true in production
});

// ✅ Create a new transaction
const transaction = await client.createTransaction({
  accountId: "your-account-id",
  reference: "order_12345",
  description: "Payment for order #12345",
  amount: 10000,
  taxValue: 0,
  taxBase: 0,
  currency: "COP",
});

console.log("Transaction created:", transaction);

// ✅ Subscription Plans
const newPlan = await client.createSubscriptionPlan({
  name: "Plan Pro",
  interval: "monthly",
  amount: 4990,
  currency: "COP",
});

const plans = await client.getSubscriptionPlans(1, 20);
console.log(plans);

await client.updateSubscriptionPlan(newPlan.id, { amount: 5990 });
await client.deleteSubscriptionPlan(newPlan.id);

// ✅ Create a subscription
const subscription = await client.subscribe({
  subscriptionPlanId: "plan_001",
  subscriberName: "Juan Pérez",
  subscriberEmail: "juan@example.com",
  tokenizedCardId: "card_abc123",
});
console.log("Subscription created:", subscription);

// ✅ Get subscribers
const allSubscribers = await client.getSubscribers();
const activeInPlanX = await client.getSubscribers({
  subscriptionPlanId: "plan_001",
  status: "active",
});

// ✅ Subscriber details & payments
const details = await client.getSubscriberDetails("subscriber_123");
const payments = await client.getSubscriptionPayments("subscriber_123");

// ✅ Manage subscription
await client.cancelSubscription("subscriber_123");
await client.pauseSubscription("subscriber_123");
await client.updateSubscription("subscriber_123", {
  subscriptionPlanId: "plan_002",
});
```

---

## 🛠️ Available Methods

| Method                                  | Description                                                |
| --------------------------------------- | ---------------------------------------------------------- |
| `encryptCardData(cardData)`             | Encrypt credit card data using public RSA key              |
| `createTransaction(data)`               | Create a new payment link transaction                      |
| `capturePayment(data)`                  | Capture a previously authorized payment                    |
| `refundPayment(paymentId)`              | Refund a completed payment                                 |
| `getAccounts()`                         | Retrieve all accounts linked to your credentials           |
| `createSubscription(data)`              | Create a new subscription                                  |
| `cancelSubscription(subscriptionId)`    | Cancel a subscription                                      |
| `pauseSubscription(subscriptionId)`     | Pause a subscription                                       |
| `updateSubscription(id, data)`          | Update subscription data                                   |
| `subscribe()`                           | Subscribe a user to a plan                                 |
| `getSubscribers([filters])`             | Get all subscribers, optionally filtered by plan or status |
| `getSubscriberDetails(subscriberId)`    | Get detailed subscriber info                               |
| `getSubscriptionPayments(subscriberId)` | Get list of payments made under a subscription             |
| `createSubscriptionPlan(data)`          | Create a new plan                                          |
| `getSubscriptionPlans(page, limit)`     | List all plans with pagination                             |
| `getSubscriptionPlanById(planId)`       | Retrieve specific plan details                             |
| `updateSubscriptionPlan(planId, data)`  | Update a plan                                              |
| `deleteSubscriptionPlan(planId)`        | Delete a subscription plan                                 |

---

## ⚙️ Configuration Options

| Option                  | Type      | Description                                                  |
| ----------------------- | --------- | ------------------------------------------------------------ |
| `accountKey`            | `string`  | Your B2PAGOS account public key                              |
| `integrityKey`          | `string`  | Key used to sign JWTs                                        |
| `username`              | `string`  | API username (email)                                         |
| `password`              | `string`  | API password                                                 |
| `pasarelaApi`           | `string`  | API base URL (e.g., `https://production.b2pagos.com/api/v1`) |
| `rejectUnauthorizedSSL` | `boolean` | Whether to reject invalid SSL certs (set `true` in prod)     |

---

## 🔒 Security Recommendations

- ✅ Always set rejectUnauthorizedSSL: true in production.
- 🔐 Keep your accountKey and integrityKey secure and never expose them in frontend code.
- ⏱️ JWT tokens are short-lived (~30s) for increased security.

---

## 🧠 TypeScript Support

This SDK is built 100% in TypeScript.
You'll enjoy full type inference, autocompletion, and compile-time safety out of the box.

---

## 🤝 Contributing

Pull requests are welcome!  
Please open an issue first to discuss what you would like to change.

---

## 📝 License

MIT License © [B2pagos](https://github.com/b2pagos)

---
