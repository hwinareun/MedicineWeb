import SearchBox from '../components/search/SearchBox';
import SearchFilter from '../components/search/SearchFilter';

const Search = () => {
  return (
    <div className="flex flex-col items-center p-2 m-2 border-2">
      <SearchBox />
      <SearchFilter />
    </div>
  );
};

export default Search;
