import { useRouteError } from 'react-router-dom';
import programming from '../../assets/images/programming.png';

interface RouteError {
  statusText?: string;
  message?: string;
}

const Error = () => {
  const error = useRouteError() as RouteError;

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={programming} className="w-48" />
      <h1>Error!</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default Error;
