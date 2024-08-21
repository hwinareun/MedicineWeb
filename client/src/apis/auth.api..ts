import { IAuth } from '../types/user.type';
import { httpClient } from './http';

interface LoginResponse {
  jwtToken: string;
}

export const login = async (userData: IAuth) => {
  const response = await httpClient.post<LoginResponse>(
    '/users/login',
    userData
  );

  return response.data;
};
