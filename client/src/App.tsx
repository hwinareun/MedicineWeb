import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Search from './pages/Search';

const routeList = [
  {
    path: '/search',
    element: <Search />,
  },
];

const router = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: item.element,
    };
  })
);

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
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
