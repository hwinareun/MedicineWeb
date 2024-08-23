import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilterState = {
  printFront: string;
  printBack: string;
  selectedForm: string[];
  selectedLine: string[];
  selectedShape: string[];
  selectedColor: string[];
};

const initialState: FilterState = {
  printFront: '',
  printBack: '',
  selectedForm: [''],
  selectedLine: [''],
  selectedShape: [''],
  selectedColor: [''],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPrintFront: (state, action: PayloadAction<string>) => {
      state.printFront = action.payload;
    },
    setPrintBack: (state, action: PayloadAction<string>) => {
      state.printBack = action.payload;
    },
    setSelectedForm: (state, action: PayloadAction<string[]>) => {
      state.selectedForm = action.payload;
    },
    setSelectedLine: (state, action: PayloadAction<string[]>) => {
      state.selectedLine = action.payload;
    },
    setSelectedShape: (state, action: PayloadAction<string[]>) => {
      state.selectedShape = action.payload;
    },
    setSelectedColor: (state, action: PayloadAction<string[]>) => {
      state.selectedColor = action.payload;
    },
    resetFilters: () => initialState,
    toggleSelection: (
      state,
      action: PayloadAction<{
        field: keyof Omit<
          FilterState,
          'searchData' | 'printFront' | 'printBack'
        >;
        value: string;
      }>
    ) => {
      const { field, value } = action.payload;
      const currentValues = state[field] as string[];
      if (value === '') {
        state[field] = [''];
      } else {
        if (currentValues.includes('')) {
          state[field] = [value];
        } else {
          if (currentValues.includes(value)) {
            state[field] = currentValues.filter((v) => v !== value);
          } else {
            state[field] = [...currentValues, value];
          }
        }
      }
    },
  },
});

export const {
  setPrintFront,
  setPrintBack,
  setSelectedForm,
  setSelectedLine,
  setSelectedShape,
  setSelectedColor,
  resetFilters,
  toggleSelection,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
