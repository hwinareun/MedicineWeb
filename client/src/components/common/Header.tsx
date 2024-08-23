import { FaList, FaSearch, FaUserAlt } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import Title1 from '../../assets/images/Title1.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { storeLogout } from '../../store/slices/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
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
  const handleLoginClick = () => {
    if (isLogin) {
      // 로그아웃 상태
      dispatch(storeLogout());
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex flex-row items-center justify-between w-auto px-2 bg-blue-100 h-14">
      <a href="/">
        <img src={Title1} alt="medicineWebTitle" className="w-48" />
      </a>
      <div className="flex flex-row gap-10">
        <div className="flex flex-row gap-4">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={handleSearchClick}
          >
            <FaSearch /> 검색
          </div>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={handlePostsClick}
          >
            <FaList /> 게시판
          </div>
          {isLogin && (
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={handleMyProfileClick}
            >
              <FaUserAlt /> 마이프로필
            </div>
          )}
        </div>
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={handleLoginClick}
        >
          <FiLogIn /> {isLogin ? '로그아웃' : '로그인'}
        </div>
      </div>
    </div>
  );
};

export default Header;
