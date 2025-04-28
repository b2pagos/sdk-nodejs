# B2PAGOS SDK for Node.js

Node.js SDK to integrate with the **B2PAGOS** payment gateway easily and securely using TypeScript.

![npm version](https://img.shields.io/npm/v/b2pagos-sdk)
![license](https://img.shields.io/npm/l/b2pagos-sdk)

---

## ✨ Features

- Create and manage subscriptions
- Capture and refund payments
- Create transactions via payment links
- Encrypt sensitive card data (RSA)
- Token-based authentication (JWT / UserPass)
- Fully typed in TypeScript
- Compatible with Node.js 18+

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
import { B2PClient } from 'b2pagos-sdk';

const client = new B2PClient({
  accountKey: 'your-account-key',
  integrityKey: 'your-integrity-key',
  username: 'your-username',
  password: 'your-password',
  pasarelaApi: 'https://sandbox.b2pagos.com',
  rejectUnauthorizedSSL: false, // Set to true in production
});

// Create a new transaction
async function createPaymentLink() {
  const transaction = await client.createTransaction({
    accountId: 'your-account-id',
    reference: 'order_12345',
    description: 'Payment for order #12345',
    amount: 10000,
    taxValue: 0,
    taxBase: 0,
    currency: 'COP',
  });

  console.log('Transaction created:', transaction);
}

createPaymentLink();
```

---

## 🛠️ Available Methods

| Method | Description |
|:---|:---|
| `encryptCardData(cardData)` | Encrypts credit card info using public key |
| `createSubscription(subscriptionData)` | Creates a new subscription |
| `capturePayment(paymentData)` | Captures a payment |
| `cancelSubscription(subscriptionId)` | Cancels a subscription |
| `refundPayment(paymentId)` | Refunds a payment |
| `createTransaction(transactionData)` | Creates a payment link transaction |
| `getAccounts()` | Retrieves accounts associated with your credentials |

---

## ⚙️ Configuration Options

| Property | Type | Description |
|:---|:---|:---|
| `accountKey` | `string` | Your B2PAGOS account key |
| `integrityKey` | `string` | Secret key to sign JWTs |
| `username` | `string` | Your user email for login |
| `password` | `string` | Your password |
| `pasarelaApi` | `string` | Base URL of the B2PAGOS API |
| `rejectUnauthorizedSSL` | `boolean` | (Optional) Set to `false` for sandbox environments |

---

## 🔒 Security

- **Important:** In production, always set `rejectUnauthorizedSSL: true`.
- Keep your **integrityKey** and **accountKey** secure and private.
- Tokens have a short expiration time for security (30 seconds for JWT).

---

## 🧐 TypeScript Support

This SDK is fully typed.  
You will get autocompletion and type safety out of the box if you are using TypeScript.

---

## 🤝 Contributing

Pull requests are welcome!  
Please open an issue first to discuss what you would like to change.

---

## 📝 License

MIT License © [B2pagos](https://github.com/b2pagos)

---

