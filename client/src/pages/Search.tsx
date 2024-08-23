import { useState } from 'react';
import Reference from '../components/reference/Reference';
import SearchBox from '../components/search/SearchBox';
import SearchFilter from '../components/search/SearchFilter';
import { DrugData } from '../types/drug.type';
import ReferenceEmpty from '../components/reference/ReferenceEmpty';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const location = useLocation();
  const [results, setResults] = useState<DrugData[]>(
    location.state?.results || []
  );

  return (
    <div className="flex flex-col items-center px-4 m-4">
      <div className="flex justify-center flex-grow gap-6">
        <div className="flex flex-col max-w-screen-sm text-xs rounded-lg shadow-md shadow-medicinePositive bg-medicineNeutral whitespace-nowrap w-fit h-fit">
          <SearchBox setResults={setResults} />
          <SearchFilter setResults={setResults} />
        </div>
        <div className="max-h-full overflow-y-auto text-center rounded-lg shadow-md shadow-medicinePositive w-fit h-fit">
          {results.length > 0 ? (
            <Reference data={results} />
          ) : (
            <ReferenceEmpty />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
