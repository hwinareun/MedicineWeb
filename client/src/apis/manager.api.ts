import { DrugData } from '../types/drug.type';
import { httpClient } from './http';

export const updateDrugData = async () => {
  const url = `/drugs/update`;

  try {
    const response = await httpClient.get(url);
    console.log('Drug data update successful:', response.data);
    return response.data;
  } catch (error) {
    console.error(`Failed to update drug data`, error);
    throw new Error('Failed to update drug data');
  }
};

export const addDrugData = async (drugData: DrugData) => {
  const url = `/drugs`;

  try {
    const response = await httpClient.post(url, drugData);
    return response.data;
  } catch (error) {
    console.error(`Failed to add drug data`, error);
    throw new Error('Failed to add drug data');
  }
};
