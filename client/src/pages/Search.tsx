import SearchBox from '../components/search/SearchBox';
import SearchFilter from '../components/search/SearchFilter';

const Search = () => {
  return (
    <div className="flex flex-col items-center justify-center w-auto p-2 m-2">
      <SearchBox />
      <SearchFilter />
    </div>
  );
};

export default Search;
