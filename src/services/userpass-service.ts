import { apiRequest } from "../core/api";
import { ApiContext } from "../types/common-types";
import {
    buildPaymentLinkPayload,
    buildPaymentPayload,
    buildTransactionPayload,
    CreateOrUpdatePaymentLinkParams,
    CreateOrUpdateTransactionParams,
    CreatePaymentParams
} from "../types/userpass-types";

export const getAccounts = (context: ApiContext) => {
    return apiRequest(context, {
        endpoint: '/accounts',
        method: 'GET',
        authType: 'USERPASS'
    });
};

export const getAccountByAccountKey = (context: ApiContext) => {
    return apiRequest(context, {
        endpoint: `/accounts/accountkey`,
        method: 'POST',
        data: {
            account_key: context.accountKey
        },
        authType: 'USERPASS'
    });
};

export const getPaymentMethods = (context: ApiContext, accountId: number) => {
    return apiRequest(context, {
        endpoint: `/accounts/paymentmethods`,
        method: 'POST',
        data: {
            account_id: accountId
        },
        authType: 'USERPASS'
    });
};

export const getCurrencies = (context: ApiContext) => {
    return apiRequest(context, {
        endpoint: '/currencies',
        method: 'GET',
        authType: 'USERPASS'
    });
};

export const getTaxes = (context: ApiContext) => {
    return apiRequest(context, {
        endpoint: '/taxes',
        method: 'GET',
        authType: 'USERPASS'
    });
};

export const getCountries = (context: ApiContext) => {
    return apiRequest(context, {
        endpoint: '/countries',
        method: 'GET',
        authType: 'USERPASS'
    });
};

export const getRegions = (context: ApiContext, countryId: number) => {
    return apiRequest(context, {
        endpoint: `/regions/${countryId}`,
        method: 'GET',
        authType: 'USERPASS'
    });
};

export const getCities = (context: ApiContext, countryId: number, regionId: number) => {
    return apiRequest(context, {
        endpoint: `/cities/${countryId}/${regionId}`,
        method: 'GET',
        authType: 'USERPASS'
    });
};

export const getDocumentTypes = (context: ApiContext) => {
    return apiRequest(context, {
        endpoint: '/documentTypes',
        method: 'GET',
        authType: 'USERPASS'
    });
}

export const getPseBanks = (context: ApiContext) => {
    return apiRequest(context, {
        endpoint: '/pseBanks',
        method: 'GET',
        authType: 'USERPASS'
    });
};

export const getBanks = (context: ApiContext) => {
    return apiRequest(context, {
        endpoint: '/banks',
        method: 'GET',
        authType: 'USERPASS'
    });
};

export const getCiiuCodes = (context: ApiContext) => {
    return apiRequest(context, {
        endpoint: '/ciiuCodes',
        method: 'GET',
        authType: 'USERPASS'
    });
};

export const createPaymentLink = (context: ApiContext, data: CreateOrUpdatePaymentLinkParams) => {
    return apiRequest(context, {
        endpoint: '/paymentLink',
        method: 'POST',
        data: buildPaymentLinkPayload(data),
        authType: 'USERPASS'
    });
};

export const getPaymentLinks = (context: ApiContext, accountId: number, page: number) => {
    return apiRequest(context, {
        endpoint: `/paymentLink/list/${accountId}/${page}`,
        method: 'GET',
        authType: 'USERPASS'
    });
};

export const createTransaction = (context: ApiContext, data: CreateOrUpdateTransactionParams) => {
    return apiRequest(context, {
        endpoint: '/paymentLink/transaction',
        method: 'POST',
        data: buildTransactionPayload(data),
        authType: 'USERPASS'
    });
};

export const createPayWithPSE = (context: ApiContext, data: CreatePaymentParams) => {
    return apiRequest(context, {
        endpoint: '/checkout/checkoutPse',
        method: 'POST',
        data: buildPaymentPayload(data),
        authType: 'USERPASS'
    });
}

export const getTransactionstatus = (context: ApiContext, accountId: number, token: string) => {
    return apiRequest(context, {
        endpoint: `/checkout/transactionStatus?account_id=${accountId}&Token=${token}`,
        method: 'GET',
        authType: 'USERPASS'
    });
};

// async encryptCardData(cardData: CardData) {
//     const publicKey = await this.getPublicKey();

//     return {
//         creditcard_number: encryptRSA(cardData.creditCardNumber, publicKey),
//         creditcard_expirationdate: encryptRSA(cardData.creditCardExpirationDate, publicKey),
//         creditcard_securitycode: encryptRSA(cardData.creditCardSecurityCode, publicKey)
//     };
// }
