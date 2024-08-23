import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect } from 'react';
import { getProfile } from '../apis/auth.api';
import { storeUserInfo } from '../store/slices/authSlice';

const Profile = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    getProfile()
      .then((res) => {
        console.log('getProfile success', res);
        dispatch(storeUserInfo(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex-grow flex">
      <div className="flex-1 flex items-center justify-center">userInfo</div>
      <div className="flex-1 flex">favorite</div>
      <div className="flex-1 flex">post</div>
    </div>
  );
};

export default Profile;
