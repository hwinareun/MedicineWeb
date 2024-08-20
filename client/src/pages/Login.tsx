import { useState } from 'react';
import { LoginInput } from '../components/login/LoginInput';
import { LoginWarnText } from '../components/login/LoginWarnText';
import { LoginButton } from '../components/login/LoginButton';
import { LoginNavigation } from '../components/login/LoginNavigation';

const WARN_TEXT_ID = {
  1: '아이디를 입력해주세요',
  2: '로그인에 실패했습니다',
};
const WARN_TEXT_PWD = {
  1: '비밀번호를 입력해주세요',
  2: '로그인에 실패했습니다',
};

export const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState([0, 0]);

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
  const login = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (id === '' && password === '') {
      setShowWarning([1, 1]);
    } else if (id === '') {
      setShowWarning([1, 0]);
    } else if (password === '') {
      setShowWarning([0, 1]);
    } else {
      console.log('login', id, password);
      // login api 호출
      // 성공 시 navigate to main
      setShowWarning([0, 0]);
      // 실패 시 다시 로그인 안내
      initInput();
      // setShowWarning([2, 2]);
    }
  };

  return (
    <div className="bg-blue-50 p-5 w-fit flex flex-col items-center rounded shadow-md">
      <h3 className="text-2xl font-bold mb-5 pl-20">로그인</h3>
      <form onSubmit={login} className="flex flex-col gap-1 w-fit items-center">
        <div className="flex flex-col w-full items-center">
          <div className="flex w-full justify-between h-fit">
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
