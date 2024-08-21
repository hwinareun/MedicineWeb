import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDrug: '의약품명',
  searchItem: '',
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
  },
});

export const { setSelectedDrug, setSearchItem } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
