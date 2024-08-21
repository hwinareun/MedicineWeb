import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DrugData, DrugState } from '../../types/drug.type';

const initialState: DrugState = {
  selectedDrug: '의약품명',
  searchResults: [],
  data: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSelectedDrug(state, action: PayloadAction<string>) {
      state.selectedDrug = action.payload;
      state.searchItem = '';
    },
    setSearchItem(state, action: PayloadAction<string>) {
      state.searchItem = action.payload;
    },
    setSearchResults(state, action: PayloadAction<DrugData[]>) {
      state.searchResults = action.payload;
    },
  },
});

export const { setSelectedDrug, setSearchItem } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
