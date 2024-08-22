import { useState } from 'react';
import { LoginInput } from './LoginInput';
import { LoginWarnText } from './LoginWarnText';
import { LoginButton } from './LoginButton';
import { LoginNavigation } from './LoginNavigation';
import { useDispatch } from 'react-redux';
import { IAuth } from '../../types/user.type';
import { login } from '../../apis/auth.api';
import { storeLogin } from '../../store/slices/authSlice';

const WARN_TEXT_ID = {
  1: '아이디를 입력해주세요',
  2: '로그인에 실패했습니다',
};
const WARN_TEXT_PWD = {
  1: '비밀번호를 입력해주세요',
  2: '로그인에 실패했습니다',
};

export const LoginBox = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState([0, 0]);
  const dispatch = useDispatch();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const initInput = () => {
    setId('');
    setPassword('');
  };
  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (id === '' && password === '') {
      setShowWarning([1, 1]);
    } else if (id === '') {
      setShowWarning([1, 0]);
    } else if (password === '') {
      setShowWarning([0, 1]);
    } else {
      // console.log('login', id, password);
      const userData: IAuth = {
        id,
        password,
      };
      login(userData)
        .then((res) => {
          // 성공 시 navigate to main
          dispatch(storeLogin({ jwtToken: res.token }));
          // console.log(res);
          setShowWarning([0, 0]);
        })
        .catch((err) => {
          // 실패 시 다시 로그인 안내
          console.log(err);
          initInput();
          setShowWarning([2, 2]);
        });
    }
  };

  return (
    <div className="flex flex-col items-center p-5 rounded shadow-md bg-blue-50 w-fit h-fit">
      <h3 className="pl-20 mb-5 text-2xl font-bold">로그인</h3>
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center gap-1 w-fit"
      >
        <div className="flex flex-col items-center w-full">
          <div className="flex justify-between w-full h-fit">
            <LoginInput
              label="아이디"
              value={id}
              placeholder="아이디를 입력해주세요"
              onChange={handleIdChange}
            />
          </div>
          <LoginWarnText warnText={WARN_TEXT_ID[showWarning[0]]} />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between h-fit">
            <LoginInput
              label="비밀번호"
              type="password"
              value={password}
              placeholder="비밀번호를 입력해주세요"
              onChange={handlePasswordChange}
            />
          </div>
          <LoginWarnText warnText={WARN_TEXT_PWD[showWarning[1]]} />
        </div>
        <div className="pl-20">
          <LoginButton />
          <LoginNavigation />
        </div>
      </form>
    </div>
  );
};
