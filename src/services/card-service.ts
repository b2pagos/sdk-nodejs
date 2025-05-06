import { getPublicKey } from './utils-service';
import { encryptRSA } from '../utils/encryption-utils';
import { apiRequest } from '../core/api';
import { ApiContext } from '../types/common-types';
import { TokenizeCardParams } from '../types/card-types';

export const listTokenizedCards = (context: ApiContext) => {
    return apiRequest(context, {
        endpoint: '/cards',
        method: 'GET',
        authType: 'JWT'
    });
};

export const tokenizeCard = async (context: ApiContext, data: TokenizeCardParams) => {
    const publicKey = await getPublicKey(context);

    const encryptedPayload = {
        card_holder_name: data.cardHolderName,
        card_number: encryptRSA(data.cardNumber, publicKey),
        expiry_date: encryptRSA(data.cardExpirationDate, publicKey),
        cvv: encryptRSA(data.cardCvv, publicKey),
        card_brand: data.cardBrand
    };

    return apiRequest(context, {
        endpoint: '/cards',
        method: 'POST',
        data: encryptedPayload,
        authType: 'JWT'
    });
};

export const getTokenizedCard = (context: ApiContext, tokenCard: string) => {
    return apiRequest(context, {
        endpoint: `/cards/${tokenCard}`,
        method: 'GET',
        authType: 'JWT'
    });
};

export const deleteTokenizedCard = (context: ApiContext, tokenCard: string) => {
    return apiRequest(context, {
        endpoint: `/cards/${tokenCard}`,
        method: 'DELETE',
        authType: 'JWT'
    });
};

export const chargeTokenizedCard = (context: ApiContext, tokenCard: string, payload: Record<string, any>) => {
    return apiRequest(context, {
        endpoint: `/cards/${tokenCard}/charge`,
        method: 'POST',
        data: payload,
        authType: 'JWT'
    });
};

export const setPrimaryCard = (context: ApiContext, tokenCard: string) => {
    return apiRequest(context, {
        endpoint: `/cards/${tokenCard}/set-primary`,
        method: 'POST',
        authType: 'JWT'
    });
};
