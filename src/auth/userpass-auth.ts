import { AxiosInstance } from 'axios';

export async function fetchUserToken(
    axiosInstance: AxiosInstance,
    apiUrl: string,
    username: string,
    password: string
): Promise<string> {
    const response = await axiosInstance.post(`${apiUrl}/get-access-token`, {
        email: username,
        password: password,
    });

    return response.data.data?.toString() || '';
}
