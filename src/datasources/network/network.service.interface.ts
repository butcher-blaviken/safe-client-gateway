import { NetworkRequest } from '@/datasources/network/entities/network.request.entity';
import { NetworkResponse } from '@/datasources/network/entities/network.response.entity';

export const NetworkService = Symbol('INetworkService');

export interface INetworkService {
  get<T>(
    url: string,
    networkRequest?: NetworkRequest,
  ): Promise<NetworkResponse<T>>;

  post<T>(
    url: string,
    data: object,
    networkRequest?: NetworkRequest,
  ): Promise<NetworkResponse<T>>;

  delete<T>(
    url: string,
    data?: object,
    networkRequest?: NetworkRequest,
  ): Promise<NetworkResponse<T>>;
}
