import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect, useState } from 'react';
import { getProfile, resign } from '../apis/auth.api';
import {
  storeLogout,
  storeUserInfo,
  storeUserInfoFromToken,
} from '../store/slices/authSlice';
import { NegativeButton, PositiveButton } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { WarnText } from '../components/common/WarnText';
import FavoritesBox from '../components/favorite/FavoritesBox';

const Profile = () => {
  const { userInfo, role, isLogin } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showWarnText, setShowWarnText] = useState(false);

  useEffect(() => {
    // JWT 토큰을 통해 role 정보 업데이트
    dispatch(storeUserInfoFromToken());

    // profile 데이터 업데이트
    getProfile()
      .then((res) => {
        dispatch(storeUserInfo(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const handleChangeProfie = () => {
    navigate('/changeProfile');
  };
  const handleResign = () => {
    resign()
      .then(() => {
        setShowWarnText(false);
        dispatch(storeLogout());
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        setShowWarnText(true);
      });
  };

  const handleManager = () => {
    navigate('/manager');
  };

  return (
    <div className="flex flex-grow">
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="h-40 w-fit">
          <span className="text-medicineFontBlue text-7xl">
            {userInfo.nickname}
          </span>
          <span className="ml-2 text-2xl">님, 환영합니다</span>
        </div>
        {role === 'manager' && isLogin && (
          <div className="flex items-center">
            <div>
              <PositiveButton onClick={handleManager}>
                관리자 페이지로 이동
              </PositiveButton>
            </div>
          </div>
        )}
        <div className="flex flex-col items-center gap-3">
          <div>
            <PositiveButton onClick={handleChangeProfie}>
              개인정보 수정
            </PositiveButton>
          </div>
          <div className="flex flex-col items-center">
            <NegativeButton onClick={handleResign}>회원 탈퇴</NegativeButton>
            {showWarnText && (
              <WarnText warnText="탈퇴에 실패했습니다. 문의 부탁드립니다" />
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1">
        <FavoritesBox />
      </div>
      <div className="flex items-center justify-center flex-1">
        게시판-나중에 만나요~
      </div>
    </div>
  );
};

export default Profile;
