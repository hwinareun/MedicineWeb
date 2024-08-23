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
  lineFront?: string;
  lineBack?: string;
}

interface DrugDetailParams {
  drugId: number;
}

// 검색 + 전체 조회
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

// 상세 조회
export const fetchDrugDetail = async (params: DrugDetailParams) => {
  const { drugId } = params;

  const url = `/drugs/${drugId}`;
  console.log(`Fetching drug detail with URL: ${url}`);

  try {
    const response = await httpClient.get(url);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch drug detail with ID: ${drugId}`, error);
    throw new Error('Failed to fetch drug detail');
  }
};
