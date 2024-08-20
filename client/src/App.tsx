import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Search from './pages/Search';
import Layout from './layout/Layout';
import Error from './components/common/Error';
import Main from './pages/Main';

const routeList = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/search',
    element: <Search />,
  },
];

const router = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
      errorElement: <Error />,
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
