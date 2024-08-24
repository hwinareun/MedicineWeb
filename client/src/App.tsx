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
import Manager from './pages/Manager';

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
  {
    path: '/manager',
    element: <Manager />,
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
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
