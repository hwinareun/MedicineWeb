import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DrugData, DrugState } from '../../types/drug.type';

const initialState: DrugState = {
  data: [], // 전체 의약품 데이터
  selectedDrugCategory: '의약품명', // 드롭다운 카테고리
  searchResults: [], // 의약품 검색 결과
  searchDrug: '', // 검색하려는 의약품명||성분명||효능효과
};

const drugSlice = createSlice({
  name: 'drug',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<DrugData[]>) {
      state.data = action.payload;
    },
    setSearchResults(state, action: PayloadAction<DrugData[]>) {
      state.searchResults = action.payload;
    },
    setSelectedDrugCategory(state, action: PayloadAction<string>) {
      state.selectedDrugCategory = action.payload;
      state.searchDrug = '';
    },
    setSearchDrugItem(state, action: PayloadAction<string>) {
      state.searchDrug = action.payload;
      state.searchResults = [];
    },
  },
});

export const {
  setData,
  setSearchResults,
  setSelectedDrugCategory,
  setSearchDrugItem,
} = drugSlice.actions;
export const drugReducer = drugSlice.reducer;
