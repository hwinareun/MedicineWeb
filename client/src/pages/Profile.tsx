import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect } from 'react';
import { getProfile } from '../apis/auth.api';
import { storeUserInfo } from '../store/slices/authSlice';
import { NegativeButton, PositiveButton } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // profile 데이터 업데이트
    getProfile()
      .then((res) => {
        console.log('getProfile success', res);
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
    // 회원 탈퇴 구현
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
          <div>
            <NegativeButton onClick={handleResign}>회원 탈퇴</NegativeButton>
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
