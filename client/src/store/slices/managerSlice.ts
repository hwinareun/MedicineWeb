import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import { updateDrugData } from '../../apis/manager.api';

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
    startUpdate(state) {
      state.isLoading = true;
      state.error = null;
    },
    updateSuccess(state) {
      state.isLoading = false;
    },
    updateFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { startUpdate, updateSuccess, updateFailure } =
  managerSlice.actions;
export const managerReducer = managerSlice.reducer;

export const updateDrugDataAction = () => async (dispatch: AppDispatch) => {
  dispatch(startUpdate());
  try {
    await updateDrugData();
    dispatch(updateSuccess());
  } catch (error: unknown) {
    if (error instanceof Error) {
      dispatch(updateFailure(error.message));
    } else {
      dispatch(updateFailure('Unknown error occurred'));
    }
  }
};
