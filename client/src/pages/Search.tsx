import { useState } from 'react';
import Reference from '../components/reference/Reference';
import SearchBox from '../components/search/SearchBox';
import SearchFilter from '../components/search/SearchFilter';
import { DrugData } from '../types/drug.type';
import ReferenceEmpty from '../components/reference/ReferenceEmpty';
import ReferenceDetail from '../components/reference/ReferenceDetail';

const Search = () => {
  const [results, setResults] = useState<DrugData[]>([]);

  return (
    <div className="flex flex-col p-4 m-4">
      <div className="flex">
        <div className="flex flex-col p-4 m-4 bg-medicineNeutral w-fit h-fit whitespace-nowrap">
          <SearchBox setResults={setResults} />
          <SearchFilter setResults={setResults} />
        </div>
        {results.length > 0 ? <Reference data={results} /> : <ReferenceEmpty />}
      </div>
      {/* <div className="absolute flex items-center justify-center w-svw h-svh">
        <ReferenceDetail />
      </div> */}
    </div>
  );
};

export default Search;
