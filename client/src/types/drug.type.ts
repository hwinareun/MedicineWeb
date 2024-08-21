export interface DrugData {
  id: number;
  productName: string;
  ingredients: string;
  effects: string;
  identification1: string;
  identification2: string;
  form: string;
  shape: string;
  color: string;
  line: string;
}

export interface DrugState {
  data: DrugData[];
  selectedDrugCategory: string;
  searchResults: DrugData[];
  searchDrug: string;
}
