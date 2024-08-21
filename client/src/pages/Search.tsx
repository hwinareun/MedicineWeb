import { useState } from 'react';
import Reference from '../components/reference/Reference';
import SearchBox from '../components/search/SearchBox';
import SearchFilter from '../components/search/SearchFilter';
import { DrugData } from '../types/drug.type';

const Search = () => {
  const [results, setResults] = useState<DrugData[]>([]);

  return (
    <div className="flex p-4 m-4">
      <div className="flex flex-col p-4 m-4 bg-medicineNeutral w-fit h-fit whitespace-nowrap">
        <SearchBox setResults={setResults} />
        <SearchFilter setResults={setResults} />
      </div>
      {results.length > 0 ? (
        <Reference data={results} />
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default Search;
