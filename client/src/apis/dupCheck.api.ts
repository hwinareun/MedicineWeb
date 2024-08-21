import { httpClient } from './http';

export const dupCheckId = async (id: string) => {
  const response = await httpClient.post('/users/dupCheckId', { id });

  return response.status;
};
export const dupCheckNickname = async (nickname: string) => {
  const response = await httpClient.post('/users/dupCheckNickname', {
    nickname,
  });

  return response.status;
};
