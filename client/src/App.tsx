// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Search from './pages/Search';
import Layout from './layout/Layout';
import Error from './components/common/Error';
import Main from './pages/Main';
import Login from './pages/Login';
import Join from './pages/Join';
import FindUser from './pages/FindUser';
import Profile from './pages/Profile';
import ChangeProfile from './pages/ChangeProfile';
import Post from './pages/Post';

const routeList = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/join',
    element: <Join />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/findUser',
    element: <FindUser />,
  },
  {
    path: '/myprofile',
    element: <Profile />,
  },
  {
    path: '/changeProfile',
    element: <ChangeProfile />,
  },
  {
    path: '/posts',
    element: <Post />,
  },
];

const router = createBrowserRouter(
  routeList.map((item) => {
    if (item.path === '/') return item;
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
      errorElement: <Error />,
    };
  })
);

const App: React.FC = () => {
  // const [data, setData] = useState<{ message: string } | null>(null);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/')
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  return (
    <>
      {/*data ? <p>{data.message}</p> : <p>Loading...</p>*/}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
