import { useState } from 'react';
import Reference from '../components/reference/Reference';
import SearchBox from '../components/search/SearchBox';
import SearchFilter from '../components/search/SearchFilter';
import { DrugData } from '../types/drug.type';
import ReferenceEmpty from '../components/reference/ReferenceEmpty';
// import ReferenceDetail from '../components/reference/ReferenceDetail';

const Search = () => {
  const [results, setResults] = useState<DrugData[]>([]);

  console.log('Rendering Results:', results);

  return (
    <div className="flex flex-col p-4 m-4">
      <div className="flex justify-center whitespace-nowrap">
        <div className="flex flex-col max-w-screen-sm m-4 bg-medicineNeutral w-fit h-fit whitespace-nowrap">
          <SearchBox setResults={setResults} />
          <SearchFilter setResults={setResults} />
        </div>
        <div className="m-4 text-center">
          {results.length > 0 ? (
            <Reference data={results} />
          ) : (
            <ReferenceEmpty />
          )}
        </div>
      </div>
      {/* <div className="absolute flex items-center justify-center w-svw h-svh">
        <ReferenceDetail />
      </div> */}
    </div>
  );
};

export default Search;
