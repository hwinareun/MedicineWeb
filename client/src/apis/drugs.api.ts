import { httpClient } from './http';

interface SearchParams {
  productName?: string;
  ingredients?: string;
  effects?: string;
  identification1?: string;
  identification2?: string;
  form?: string;
  shape?: string;
  color?: string;
  line?: string;
}

export const fetchDrugs = async (params: SearchParams) => {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      query.append(key, value);
    }
  });

  try {
    const response = await httpClient.get(`/search?${query.toString()}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchDrug = async () => {};

export const likeDrug = async () => {};
export const unlikeDrug = async () => {};
