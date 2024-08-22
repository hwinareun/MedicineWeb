import { authReducer } from '../slices/authSlice';
import { drugReducer } from '../slices/drugSlice';
import { filterReducer } from '../slices/filterSlice';

const reducer = {
  filter: filterReducer,
  drug: drugReducer,
  auth: authReducer,
};

export default reducer;
