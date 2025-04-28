import { createHmac } from 'crypto';

/**
 * Generates a signature from a payload using an integrity key.
 * @param payload - The payload object to sign.
 * @param integrityKey - The secret key for HMAC.
 * @returns HMAC SHA-256 signature in hexadecimal format.
 */
export function generateSignature(payload: Record<string, any>, integrityKey: string): string {
    const sortedPayload = Object.keys(payload)
        .sort()
        .reduce((acc, key) => {
            acc[key] = payload[key];
            return acc;
        }, {} as Record<string, any>);

    const payloadString = JSON.stringify(sortedPayload);
    const hmac = createHmac('sha256', integrityKey);
    hmac.update(payloadString);

    return hmac.digest('hex');
}
