import { useState } from 'react';
import { JoinInput } from '../components/join/JoinInput';
import { WarnText } from '../components/common/WarnText';
import { JoinSelect } from '../components/join/JoinSelect';
import { JoinButton } from '../components/join/JoinButton';
import { join } from '../apis/auth.api.';

const Join = () => {
  const [nickname, setNickname] = useState('');
  const [id, setId] = useState('');
  const [idQuestion, setIdQuestion] = useState('');
  const [idAnswer, setIdAnswer] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRe, setPasswordRe] = useState('');
  const [pwQuestion, setPwQuestion] = useState('');
  const [pwAnswer, setPwAnswer] = useState('');
  const [wanrPasswordCheck, setWarnPasswordCheck] = useState('');

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handleIdQuestionChange = (value: string) => {
    setIdQuestion(value);
  };
  const handleIdAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdAnswer(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handlePasswordReChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordRe(e.target.value);
  };
  const handlePwQuestionChange = (value: string) => {
    setPwQuestion(value);
  };
  const handlePwAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwAnswer(e.target.value);
  };
  const handleJoin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (password !== passwordRe) {
      // 버튼 클릭 시 일치 여부 확인
      setWarnPasswordCheck('비밀번호가 일치하지 않습니다.');
    } else {
      setWarnPasswordCheck('');
      join({
        nickname,
        id,
        idQuestion,
        idAnswer,
        password,
        pwQuestion,
        pwAnswer,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="bg-blue-50 p-5 w-fit h-fit flex flex-col items-center rounded shadow-md">
        <h3 className="text-2xl font-bold mb-5">회원가입</h3>
        <form
          onSubmit={handleJoin}
          className="flex flex-col gap-1 w-fit items-center"
        >
          <div className="flex flex-col w-full">
            <div className="flex w-full justify-between h-fit items-center">
              <JoinInput
                label="닉네임"
                value={nickname}
                onChange={handleNicknameChange}
              />
            </div>
            <WarnText warnText={''} />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex w-full justify-between h-fit items-center">
              <JoinInput label="아이디" value={id} onChange={handleIdChange} />
            </div>
            <WarnText warnText={''} />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex w-full justify-between h-fit items-center">
              <JoinSelect
                label="아이디 질문"
                value={idQuestion}
                options={['test', 'test1', 'test2']}
                onChange={handleIdQuestionChange}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex w-full justify-between h-fit items-center">
              <JoinInput
                label="답"
                value={idAnswer}
                onChange={handleIdAnswerChange}
              />
            </div>
            <WarnText warnText={''} />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex w-full justify-between h-fit items-center">
              <JoinInput
                label="비밀번호"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <WarnText warnText={''} />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex w-full justify-between h-fit items-center">
              <JoinInput
                label="비밀번호 확인"
                type="password"
                value={passwordRe}
                onChange={handlePasswordReChange}
              />
            </div>
            <WarnText warnText={wanrPasswordCheck} />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex w-full justify-between h-fit items-center">
              <JoinSelect
                label="비밀번호 질문"
                value={pwQuestion}
                options={['ptest', 'ptest1', 'ptest2']}
                onChange={handlePwQuestionChange}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex w-full justify-between h-fit items-center">
              <JoinInput
                label="답"
                value={pwAnswer}
                onChange={handlePwAnswerChange}
              />
            </div>
            <WarnText warnText={''} />
          </div>
          <JoinButton />
        </form>
        <p className="text-xs mt-2">
          이미 회원이라면?
          <a href="/login" className="underline ml-1">
            로그인하러 가기
          </a>
        </p>
      </div>
    </div>
  );
};

export default Join;
