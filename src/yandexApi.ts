import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export class AxiosController {
  static async get<T>(resource: string, params?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const response = await axios.get<T>(resource, { params });
    return response;
  }

  static async post<D>(resource: string, data: D, params?: AxiosRequestConfig): Promise<AxiosResponse> {
    return await axios.post(resource, data, params)
  }

  static async patch<T>(resource: string, data: any, params?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return await axios.patch<T>(resource, data, params)
  }

  static async delete (resource: string): Promise<AxiosResponse> {
    return await axios.delete(resource)
  }
}
