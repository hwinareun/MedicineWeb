import { authReducer } from '../slices/authSlice';
import { drugReducer } from '../slices/drugSlice';
import { favoriteReducer } from '../slices/favoriteSlice';
import { filterReducer } from '../slices/filterSlice';
import { questionReducer } from '../slices/questionSlice';

const reducer = {
  drug: drugReducer,
  filter: filterReducer,
  favorite: favoriteReducer,
  auth: authReducer,
  questions: questionReducer,
};

export default reducer;
