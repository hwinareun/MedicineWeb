import { httpClient } from './http';

interface SearchParams {
  itemName?: string;
  ingrEngName?: string;
  ingrKorName?: string;
  efcyQesitm?: string;
  printFront?: string;
  printBack?: string;
  dosageForm?: string;
  drugShape?: string;
  colorClass1?: string;
  colorClass2?: string;
  linFront?: string;
  lineBack?: string;
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
    console.error(
      `Failed to fetch drugs with query: ${query.toString()}`,
      error
    );
    throw new Error('Failed to fetch drugs');
  }
};

export const fetchDrug = async () => {};

export const likeDrug = async () => {};
export const unlikeDrug = async () => {};
