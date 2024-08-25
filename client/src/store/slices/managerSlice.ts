import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import {
  addDrugData,
  editDrugData,
  removeDrugData,
  updateDrugData,
} from '../../apis/manager.api';
import { DrugData } from '../../types/drug.type';

interface ManagerState {
  isLoading: boolean;
  error: string | null;
}

const initialState: ManagerState = {
  isLoading: false,
  error: null,
};

const managerSlice = createSlice({
  name: 'manager',
  initialState,
  reducers: {
    setStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    setSuccess(state) {
      state.isLoading = false;
    },
    setFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setFailure, setStart, setSuccess } = managerSlice.actions;
export const managerReducer = managerSlice.reducer;

const handleError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return 'Unknown error occurred';
};

export const updateDrugDataAction = () => async (dispatch: AppDispatch) => {
  dispatch(setStart());
  try {
    await updateDrugData();
    dispatch(setSuccess());
  } catch (error: unknown) {
    dispatch(setFailure(handleError(error)));
  }
};

export const addDrugDataAction =
  (drugData: DrugData) => async (dispatch: AppDispatch) => {
    dispatch(setStart());
    try {
      await addDrugData(drugData);
      dispatch(setSuccess());
    } catch (error: unknown) {
      dispatch(setFailure(handleError(error)));
    }
  };

export const editDrugDataAction =
  (drugData: DrugData) => async (dispatch: AppDispatch) => {
    dispatch(setStart());
    try {
      await editDrugData(drugData);
      dispatch(setSuccess());
    } catch (error: unknown) {
      dispatch(setFailure(handleError(error)));
    }
  };

export const removeDrugDataAction =
  (drugId: number) => async (dispatch: AppDispatch) => {
    dispatch(setStart());
    try {
      await removeDrugData(drugId);
      dispatch(setSuccess());
    } catch (error: unknown) {
      dispatch(setFailure(handleError(error)));
    }
  };
