import { authReducer } from '../slices/authSlice';
import { drugReducer } from '../slices/drugSlice';
import { filterReducer } from '../slices/filterSlice';
import { questionReducer } from '../slices/questionSlice';

const reducer = {
  filter: filterReducer,
  drug: drugReducer,
  auth: authReducer,
  questions: questionReducer,
};

export default reducer;
