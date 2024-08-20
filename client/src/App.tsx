import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Login } from './pages/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routeList = [
  {
    path: '/login',
    element: <Login />,
  },
];

const router = createBrowserRouter(routeList);

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
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
