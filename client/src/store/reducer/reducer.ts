import { drugReducer } from '../slices/drugSlice';
import { filterReducer } from '../slices/filterSlice';
import { searchReducer } from '../slices/searchSlice';

const reducer = {
  search: searchReducer,
  filter: filterReducer,
  drug: drugReducer,
};

export default reducer;
