import * as jwt from 'jsonwebtoken';

export function generateJwt(accountKey: string, integrityKey: string): string {
    const payload = {
        account_key: accountKey,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 30,
    };
    return jwt.sign(payload, integrityKey, { algorithm: 'HS256' });
}
