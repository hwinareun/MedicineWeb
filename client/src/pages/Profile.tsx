import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect, useState } from 'react';
import { getProfile, resign } from '../apis/auth.api';
import { storeLogout, storeUserInfo } from '../store/slices/authSlice';
import { NegativeButton, PositiveButton } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { WarnText } from '../components/common/WarnText';

const Profile = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showWarnText, setShowWarnText] = useState(false);

  useEffect(() => {
    // profile 데이터 업데이트
    getProfile()
      .then((res) => {
        dispatch(storeUserInfo(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChangeProfie = () => {
    navigate('/changeProfile');
  };
  const handleResign = () => {
    resign()
      .then((res) => {
        setShowWarnText(false);
        dispatch(storeLogout());
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        setShowWarnText(true);
      });
  };

  return (
    <div className="flex-grow flex">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-fit h-40">
          <span className="text-medicineFontBlue text-7xl">
            {userInfo.nickname}
          </span>
          <span className="text-2xl ml-2">님, 환영합니다</span>
        </div>
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
      <div className="flex-1 flex items-center justify-center">favorite</div>
      <div className="flex-1 flex items-center justify-center">
        게시판-나중에 만나요~
      </div>
    </div>
  );
};

export default Profile;
