import { authReducer } from '../slices/authSlice';
import { drugReducer } from '../slices/drugSlice';
import { favoriteReducer } from '../slices/favoriteSlice';
import { filterReducer } from '../slices/filterSlice';
import { managerReducer } from '../slices/managerSlice';
import { questionReducer } from '../slices/questionSlice';

const reducer = {
  drug: drugReducer,
  filter: filterReducer,
  favorite: favoriteReducer,
  auth: authReducer,
  questions: questionReducer,
  manager: managerReducer,
};

export default reducer;
