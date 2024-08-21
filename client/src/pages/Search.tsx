import SearchBox from '../components/search/SearchBox';
import SearchFilter from '../components/search/SearchFilter';

const Search = () => {
  return (
    <div className="flex flex-col p-4 m-4 bg-medicineNeutral w-fit h-fit whitespace-nowrap">
      <SearchBox />
      <SearchFilter />
    </div>
  );
};

export default Search;
