import * as crypto from 'crypto';
import axios from 'axios';

/**
 * Encrypts a given string using RSA public key encryption.
 * @param data - The data to encrypt.
 * @param publicKey - The public key to use for encryption.
 * @returns Encrypted data in base64 format.
 */
export function encryptRSA(data: string, publicKey: string): string {
    const buffer = Buffer.from(data, 'utf-8');
    const encrypted = crypto.publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      buffer,
    );
    return encrypted.toString('base64');
}

/**
 * Retrieves the public key from the API.
 * @param apiUrl - Base URL of the payment gateway.
 * @returns Public key string.
 */
export async function getPublicKey(apiUrl: string): Promise<string> {
    const response = await axios.get<{ publicKey: string }>(`${apiUrl}/public-key`);
    return response.data.publicKey;
}
