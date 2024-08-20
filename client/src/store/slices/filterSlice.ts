import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchData: '',
  searchIdentification1: '',
  searchIdentification2: '',
  selectedForm: '',
  selectedLine: '',
  selectedShape: '',
  selectedColor: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchIdentification1: (state, action) => {
      state.searchIdentification1 = action.payload;
    },
    setSearchIdentification2: (state, action) => {
      state.searchIdentification2 = action.payload;
    },
    setSelectedForm: (state, action) => {
      state.selectedForm = action.payload;
    },
    setSelectedLine: (state, action) => {
      state.selectedLine = action.payload;
    },
    setSelectedShape: (state, action) => {
      state.selectedShape = action.payload;
    },
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setSearchIdentification1,
  setSearchIdentification2,
  setSelectedForm,
  setSelectedLine,
  setSelectedShape,
  setSelectedColor,
  resetFilters,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
