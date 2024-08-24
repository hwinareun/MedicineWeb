import { useNavigate, useRouteError } from 'react-router-dom';
import programming from '../../assets/images/programming.png';
import unprepared from '../../assets/images/Unprepared.png';

interface RouteError {
  statusText?: string;
  message?: string;
}

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError() as RouteError;

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-row items-end">
        <img src={unprepared} className="w-48" />
        <img src={programming} className="w-48" />
        <img src={unprepared} className="w-48" />
      </div>
      <div>Error!</div>
      <p>{error.statusText || error.message}</p>
      <div className="underline cursor-pointer" onClick={handleClick}>
        메인 페이지로 이동
      </div>
    </div>
  );
};

export default Error;
