import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getToken, removeToken, setToken } from '../../utils/localStorage';
import { IUser, TAuthState } from '../../types/auth.type';

type TStoreLogin = {
  jwtToken: string;
};

const initialState: TAuthState = {
  isLogin: getToken() ? true : false,
  userInfo: {
    nickname: '',
    favorites: [],
  },
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
    storeUserInfo: (state, { payload }: PayloadAction<IUser>) => {
      state.userInfo = payload;
    },
  },
});

export const { storeLogin, storeLogout, storeUserInfo } = authSlice.actions;
export const authReducer = authSlice.reducer;
