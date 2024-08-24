import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getToken, removeToken, setToken } from '../../utils/localStorage';
import { IUser, TAuthState } from '../../types/auth.type';
import { jwtDecode } from 'jwt-decode';

type TStoreLogin = {
  jwtToken: string;
};

interface DecodedToken {
  userId: string;
  role: string;
}

const initialState: TAuthState = {
  isLogin: getToken() ? true : false,
  userInfo: {
    nickname: '',
    favorites: [],
  },
  role: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeLogin: (state, { payload }: PayloadAction<TStoreLogin>) => {
      state.isLogin = true;
      setToken(payload.jwtToken);
      const decoded: DecodedToken = jwtDecode(payload.jwtToken);
      state.role = decoded.role;
    },
    storeLogout: (state) => {
      state.isLogin = false;
      state.role = '';
      removeToken();
    },
    storeUserInfo: (state, { payload }: PayloadAction<IUser>) => {
      state.userInfo = payload;
    },
    storeUserInfoFromToken: (state) => {
      // 토큰을 기반으로 사용자 정보 업데이트.
      const token = getToken();
      if (token) {
        const decoded: DecodedToken = jwtDecode(token);
        state.role = decoded.role;
      } else {
        state.role = '';
      }
    },
  },
});

export const {
  storeLogin,
  storeLogout,
  storeUserInfo,
  storeUserInfoFromToken,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
