import clsx from 'clsx';
import Icon from '../../assets/images/Icon.png';
import { FaList, FaSearch, FaUserAlt } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { storeLogout } from '../../store/slices/authSlice';
import { useState } from 'react';

interface Props {
  isLogin: boolean;
}

export const MainNavigator: React.FC<Props> = ({ isLogin }) => {
  const [trigger, setTrigger] = useState([false, false, false, false]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    navigate('/search');
  };
  const handlePostsClick = () => {
    navigate('/posts');
  };
  const handleMyProfileClick = () => {
    navigate('/myprofile');
  };
  const handleLogout = () => {
    dispatch(storeLogout());
  };

  return (
    <div
      className={clsx(
        'flex h-fit w-80',
        !isLogin && 'justify-between mt-10',
        isLogin && 'flex-col gap-10 items-center'
      )}
    >
      <div
        className="relative flex items-center gap-2 text-xl cursor-pointer w-fit"
        onClick={handleSearchClick}
        onMouseEnter={() => {
          setTrigger([true, false, false, false]);
        }}
        onMouseLeave={() => {
          setTrigger([false, false, false, false]);
        }}
      >
        <img
          src={Icon}
          alt="medicineWebIcon"
          className={clsx(
            'absolute w-10 top-0 right-0 opacity-0',
            trigger[0] && ' animate-crawlOut1'
          )}
        />
        <FaSearch /> 상세 검색
      </div>
      <div
        className="relative flex items-center gap-2 text-xl cursor-pointer"
        onClick={handlePostsClick}
        onMouseEnter={() => {
          setTrigger([false, true, false, false]);
        }}
        onMouseLeave={() => {
          setTrigger([false, false, false, false]);
        }}
      >
        <img
          src={Icon}
          alt="medicineWebIcon"
          className={clsx(
            'absolute w-10 top-[-10px] left-[-13px] opacity-0',
            trigger[1] && 'animate-crawlOut2'
          )}
        />
        <FaList /> 게시판
      </div>
      {isLogin && (
        <>
          <div
            className="relative flex items-center gap-2 text-xl cursor-pointer"
            onClick={handleMyProfileClick}
            onMouseEnter={() => {
              setTrigger([false, false, true, false]);
            }}
            onMouseLeave={() => {
              setTrigger([false, false, false, false]);
            }}
          >
            <img
              src={Icon}
              alt="medicineWebIcon"
              className={clsx(
                'absolute w-10 top-[-15px] right-[-8px] opacity-0',
                trigger[2] && ' animate-crawlOut3'
              )}
            />
            <FaUserAlt /> 마이프로필
          </div>
          <div
            className="relative flex items-center justify-center gap-2 text-xl cursor-pointer"
            onClick={handleLogout}
            onMouseEnter={() => {
              setTrigger([false, false, false, true]);
            }}
            onMouseLeave={() => {
              setTrigger([false, false, false, false]);
            }}
          >
            <img
              src={Icon}
              alt="medicineWebIcon"
              className={clsx(
                'absolute w-10 top-0 opacity-0',
                trigger[3] && 'animate-crawlOut1'
              )}
            />
            <FiLogIn /> 로그아웃
          </div>
        </>
      )}
    </div>
  );
};
