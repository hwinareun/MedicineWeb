import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { removeToken, setToken } from '../../utils/localStorage';

type TStoreLogin = {
  jwtToken: string;
};

const initialState = {
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeLogin: (state, { payload }: PayloadAction<TStoreLogin>) => {
      state.isLogin = true;
      setToken(payload.jwtToken);
    },
    storeLogout: (state) => {
      state.isLogin = false;
      removeToken();
    },
  },
});

export const { storeLogin, storeLogout } = authSlice.actions;
export const authReducer = authSlice.reducer;
