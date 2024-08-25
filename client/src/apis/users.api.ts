import { IAuth } from '../types/auth.type';
import { httpClient } from './http';

interface findData {
  nickname?: string;
  id?: string;
  question: string;
  answer: string;
}

export const findId = async (data: findData) => {
  const findIdData = {
    nickname: data!.nickname,
    idQuestion: data.question,
    idAnswer: data.answer,
  };
  const response = await httpClient.post<{ id: string }>(
    '/users/findId',
    findIdData
  );

  return response.data;
};

export const reqResetPassword = async (data: findData) => {
  const resetPwData = {
    id: data!.id,
    pwQuestion: data.question,
    pwAnswer: data.answer,
  };
  const response = await httpClient.post('/users/resetPassword', resetPwData);

  return response.status;
};

export const resetPassword = async (data: IAuth) => {
  const response = await httpClient.put('/users/resetPassword', data);

  return response.status;
};
