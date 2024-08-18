import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBox from './components/search/SearchBox';
import SearchFilter from './components/search/SearchFilter';

const App: React.FC = () => {
  const [data, setData] = useState<{ message: string } | null>(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {/*data ? <p>{data.message}</p> : <p>Loading...</p>*/}
      <div className="search">
        <SearchBox />
        <SearchFilter />
      </div>
    </div>
  );
};

export default App;
