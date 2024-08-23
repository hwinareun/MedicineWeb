import { IAuth, IUser } from '../types/auth.type';
import { httpClient } from './http';

interface JoinUserData extends IAuth {
  nickname: string;
  idQuestion: string;
  idAnswer: string;
  pwQuestion: string;
  pwAnswer: string;
}

export const join = async (userData: JoinUserData) => {
  const response = await httpClient.post('/users/join', userData);

  return response.status;
};

interface LoginResponse {
  token: string;
}

export const login = async (userData: IAuth) => {
  const response = await httpClient.post<LoginResponse>(
    '/users/login',
    userData
  );

  return response.data;
};

export const resign = async () => {
  const response = await httpClient.delete('/users/resign');

  return response.status;
};

export const getProfile = async () => {
  const response = await httpClient.get<IUser>('/users/profile');

  return response.data;
};
