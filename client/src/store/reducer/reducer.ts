import { drugReducer } from '../slices/drugSlice';
import { filterReducer } from '../slices/filterSlice';

const reducer = {
  filter: filterReducer,
  drug: drugReducer,
};

export default reducer;
