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

  const url = `/search?${query.toString()}`;
  console.log(`Fetching drugs with URL: ${url}`);

  try {
    const response = await httpClient.get(url);
    return response.data;
  } catch (error) {
    console.error(
      `Failed to fetch drugs with query: ${query.toString()}`,
      error
    );
    throw new Error('Failed to fetch drugs');
  }
};
