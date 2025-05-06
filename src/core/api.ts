import { Agent } from 'https';
import axios from 'axios';
import { generateJwt } from '../auth/jwt-auth';
import { fetchUserToken } from '../auth/userpass-auth';
import { ApiContext, ApiRequestOptions } from '../types/common-types';

export async function apiRequest<T>(
    context: ApiContext,
    { endpoint, method, data, authType }: ApiRequestOptions
): Promise<T> {
    const headers: Record<string, string> = {};

    let httpsAgent = new Agent({ rejectUnauthorized: context.rejectUnauthorizedSSL ?? true });
    let axiosInstance = axios.create({ httpsAgent });

    if (authType === 'JWT') {
        const jwt = generateJwt(context.accountKey, context.integrityKey);
        headers['Authorization'] = `Bearer ${jwt}`;
    } else if (authType === 'USERPASS') {
        const userToken = await fetchUserToken(
            axiosInstance,
            context.pasarelaApi,
            context.username,
            context.password
        );
        headers['Authorization'] = `Bearer ${userToken}`;
    }

    const response = await axiosInstance.request<T>({
        url: `${context.pasarelaApi}${endpoint}`,
        method,
        data,
        headers,
    });

    return response.data;
}
