export interface PublicKeyResponse {
    success: boolean;
    data: {
        id: number;
        rsa_public_key: string;
    };
    message: string;
}