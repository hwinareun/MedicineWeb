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

export const fetchDrugs = async (params: SearchParams) => {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      query.append(key, value);
    }
  });

  const url = `/search?${query.toString()}`;

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

export const fetchDrugDetail = async (params: DrugDetailParams) => {
  const { drugId } = params;

  const url = `/drugs/${drugId}`;

  try {
    const response = await httpClient.get(url);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch drug detail with ID: ${drugId}`, error);
    throw new Error('Failed to fetch drug detail');
  }
};

export const fetchFavorites = async () => {
  const url = `/favorites`;

  try {
    const response = await httpClient.get(url);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch Favorites`, error);
    throw new Error('Failed to fetch Favorites');
  }
};

export const fetchFavoriteDetail = async (params: DrugDetailParams) => {
  const { drugId } = params;
  const url = `/favorites/${drugId}`;

  try {
    const response = await httpClient.get(url);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch Favorite Detail with ID: ${drugId}`, error);
    throw new Error('Failed to fetch Favorite Detail');
  }
};

export const favoriteDrug = async (params: DrugDetailParams) => {
  const { drugId } = params;
  const url = `/favorites/${drugId}`;

  try {
    const response = await httpClient.post(url);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch Favorite Drug with ID: ${drugId}`, error);
    throw new Error('Failed to fetch Favorite Drug');
  }
};

export const unfavoriteDrug = async (params: DrugDetailParams) => {
  const { drugId } = params;
  const url = `/favorites/${drugId}`;

  try {
    const response = await httpClient.delete(url);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch unfavorite Drug with ID: ${drugId}`, error);
    throw new Error('Failed to fetch unfavorite Drug');
  }
};
