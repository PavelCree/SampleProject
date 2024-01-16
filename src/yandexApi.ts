import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';


interface Params {
    body: any;
    [key: string]: any;
}

export default class AxiosController {
    static get<T>(resource: string, params?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return axios.get<T>(resource, { params });
    }

    static post<D>(resource: string, data: D, params?: AxiosRequestConfig): Promise<AxiosResponse> {
        return axios.post(resource, data, params);
    }

    static patch<T>(resource: string, data: any, params?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return axios.patch<T>(resource, data, params);
    }

    static delete(resource: string): Promise<AxiosResponse> {
        return axios.delete(resource);
    }
}
