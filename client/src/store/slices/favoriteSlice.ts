import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DrugData, FavoriteDrugState } from '../../types/drug.type';
import { AppDispatch } from '..';
import {
  favoriteDrug,
  fetchFavorites,
  unfavoriteDrug,
} from '../../apis/drugs.api';

const initialState: FavoriteDrugState = {
  favoriteDrugs: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<DrugData[]>) {
      state.favoriteDrugs = action.payload;
    },
    addFavorite(state, action: PayloadAction<DrugData>) {
      state.favoriteDrugs.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.favoriteDrugs = state.favoriteDrugs.filter(
        (drug) => drug.drugId !== action.payload
      );
    },
  },
});

export const { setFavorites, addFavorite, removeFavorite } =
  favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;

export const fetchFavoriteDrugs = () => async (dispatch: AppDispatch) => {
  try {
    const favoriteDrugs = await fetchFavorites();
    dispatch(setFavorites(favoriteDrugs));
  } catch (error) {
    console.error('Failed to fetch favorites', error);
  }
};

export const addFavoriteDrug =
  (drugId: number) => async (dispatch: AppDispatch) => {
    try {
      const newFavorite = await favoriteDrug({ drugId });
      dispatch(addFavorite(newFavorite));
    } catch (error) {
      console.error('Failed to add favorite', error);
    }
  };

export const removeFavoriteDrug =
  (drugId: number) => async (dispatch: AppDispatch) => {
    try {
      await unfavoriteDrug({ drugId });
      dispatch(removeFavorite(drugId));
    } catch (error) {
      console.error('Failed to remove favorite', error);
    }
  };
