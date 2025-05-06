export interface CreateOrUpdateTransactionParams {
    accountId: string;
    reference?: string;
    description: string;
    total: number;
    taxValue: number;
    taxBase: number;
    currency?: string;
}

export function buildTransactionPayload(data: CreateOrUpdateTransactionParams) {
    return {
        account_id: data.accountId,
        reference: data.reference,
        description: data.description,
        total: data.total,
        tax_value: data.taxValue,
        tax_base: data.taxBase,
        currency: data.currency,
    };
}

export interface CreateOrUpdatePaymentLinkParams {
    isSingleUse: boolean;
    expirationDate?: string;
    redirectUrl?: string;
    MethodPay: string;
    accountId: string;
    reference?: string;
    description: string;
    total: number;
    taxValue: number;
    taxBase: number;
    currency?: string;
}

export function buildPaymentLinkPayload(data: CreateOrUpdatePaymentLinkParams) {
    return {
        is_single_use: data.isSingleUse,
        expiration_date: data.expirationDate,
        redirect_url: data.redirectUrl,
        method_pay: data.MethodPay,
        account_id: data.accountId,
        reference: data.reference,
        description: data.description,
        total: data.total,
        tax_value: data.taxValue,
        tax_base: data.taxBase,
        currency: data.currency,
    };
}

export interface CreatePaymentParams {
    apellidos: string;
    companyTerms: boolean;
    email: string;
    nombres: string;
    numeroDocumento: string;
    telefono: string;
    tipoDocumento: string;
    transactionId: string;
    transactionIp?: string;
    pais: string;
    ciudad: string;
    direccion: string;
    codigoPostal: string;
    metodopago: 'TC' | 'PSE';
    Token: string;
    accountId: string;
    typeuser?: 'person' | 'company';
    bank?: string;
    creditcardName?: string;
    creditcardNumber?: string;
    creditcardExpirationdate?: string;
    creditcardSecuritycode?: string;
    tipoTc?: string;
    redirectUrl: string;
}

export function buildPaymentPayload(data: CreatePaymentParams) {
    return {
        apellidos: data.apellidos,
        company_terms: data.companyTerms,
        email: data.email,
        nombres: data.nombres,
        numero_documento: data.numeroDocumento,
        telefono: data.telefono,
        tipo_documento: data.tipoDocumento,
        transaction_id: data.transactionId,
        transaction_ip: data.transactionIp,
        pais: data.pais,
        ciudad: data.ciudad,
        direccion: data.direccion,
        codigo_postal: data.codigoPostal,
        metodopago: data.metodopago,
        Token: data.Token,
        accountId: data.accountId,
        typeuser: data.typeuser,
        bank: data.bank,
        creditcard_name: data.creditcardName,
        creditcard_number: data.creditcardNumber,
        creditcard_expirationdate: data.creditcardExpirationdate,
        creditcard_securitycode: data.creditcardSecuritycode,
        tipo_tc: data.tipoTc,
        redirect_url: data.redirectUrl
    };
}