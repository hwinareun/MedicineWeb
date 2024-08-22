import { httpClient } from './http';

interface SearchParams {
  itemName?: string; // 의약품명
  ingrEngName?: string; // 성분
  ingrKorName?: string;
  efcyQesitm?: string; //효능효과
  printFront?: string; // 식별문자
  printBack?: string;
  dosageForm?: string; // 제형
  drugShape?: string; // 모양
  colorClass1?: string; // 색상
  colorClass2?: string;
  linFront?: string; // 분할선
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
