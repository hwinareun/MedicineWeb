import { filterReducer } from '../slices/filterSlice';
import { searchReducer } from '../slices/searchSlice';

const reducer = {
  search: searchReducer,
  filter: filterReducer,
};

export default reducer;
