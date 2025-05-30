# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2025-05-06

### Added

- Modular architecture (`CardService`, `SubscriptionService`, etc.)
- Unified `ApiContext`
- TypeDoc support (`docs/` generation)

### Changed

- Consistent use of async/await patterns
- Refactored `B2PClient` facade for clarity

### Fixed

- Error handling in `getTokenizedCard`

## [1.0.0] - 2025-04-28

### Added

- Initial release of **b2pagos-sdk** for Node.js
- B2PClient class with:
  - `createTransaction`
  - `createSubscription`
  - `capturePayment`
  - `refundPayment`
  - `cancelSubscription`
  - `getAccounts`
  - `encryptCardData`
- Secure JWT authentication
- HTTPS agent with SSL handling
- RSA encryption utility
- Full TypeScript support with typings
- Published to npm under MIT License

---
