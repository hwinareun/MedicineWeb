export interface IAuth {
  id: string;
  password: string;
}

export type TAuthState = {
  isLogin: boolean;
  userInfo: IUser;
};

export interface IUser {
  nickname: string;
  favorites: IFavorite[];
}

export interface IFavorite {
  drugId: number;
  itemName: string;
  itemImage: string;
  ingrEngName: string;
  efcyQesitm: string;
}
