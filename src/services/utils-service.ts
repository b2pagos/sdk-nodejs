import { apiRequest } from '../core/api';
import { ApiContext } from '../types/common-types';
import { PublicKeyResponse } from '../types/response-types';

export const getPublicKey = async (context: ApiContext) => {
    const data = await apiRequest<PublicKeyResponse>(context, {
        endpoint: '/rsa-public-key',
        method: 'GET',
        authType: 'JWT'
    });
    return data.data.rsa_public_key;
}
