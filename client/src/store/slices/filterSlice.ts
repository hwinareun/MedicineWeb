import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilterState = {
  searchData: string;
  searchIdentification1: string;
  searchIdentification2: string;
  selectedForm: string;
  selectedLine: string;
  selectedShape: string;
  selectedColor: string;
};

const initialState: FilterState = {
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
    setSearchIdentification1: (state, action: PayloadAction<string>) => {
      state.searchIdentification1 = action.payload;
    },
    setSearchIdentification2: (state, action: PayloadAction<string>) => {
      state.searchIdentification2 = action.payload;
    },
    setSelectedForm: (state, action: PayloadAction<string>) => {
      state.selectedForm = action.payload;
    },
    setSelectedLine: (state, action: PayloadAction<string>) => {
      state.selectedLine = action.payload;
    },
    setSelectedShape: (state, action: PayloadAction<string>) => {
      state.selectedShape = action.payload;
    },
    setSelectedColor: (state, action: PayloadAction<string>) => {
      state.selectedColor = action.payload;
    },
    resetFilters: () => initialState,
    toggleSelection: (
      state,
      action: PayloadAction<{ field: keyof FilterState; value: string }>
    ) => {
      const { field, value } = action.payload;
      state[field] = state[field] === value ? '' : value;
    },
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
  toggleSelection,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
