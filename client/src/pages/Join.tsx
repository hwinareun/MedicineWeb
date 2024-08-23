import { useState } from 'react';
import { JoinInput } from '../components/join/JoinInput';
import { WarnText } from '../components/common/WarnText';
import { JoinSelect } from '../components/join/JoinSelect';
import { JoinButton } from '../components/join/JoinButton';
import { join } from '../apis/auth.api';
import { useNavigate } from 'react-router-dom';
import { JoinDupCheckButton } from '../components/join/JoinDupCheckButton';
import { dupCheckId, dupCheckNickname } from '../apis/dupCheck.api';

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
  const [warnNicknameCheck, setWarnNicknameCheck] = useState('');
  const [warnIdCheck, setWarnIdCheck] = useState('');
  const navigate = useNavigate();

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
        .then((res) => navigate('/login'))
        .catch((err) => console.log(err));
    }
  };
  const handleNicknameCheck = () => {
    if (nickname) {
      dupCheckNickname(nickname)
        .then((res) => {
          setWarnNicknameCheck('사용 가능한 닉네임입니다');
        })
        .catch((err) => {
          if (err.response.status === 409) {
            setWarnNicknameCheck('중복된 닉네임입니다');
          }
          console.log(err);
        });
    } else {
      setWarnNicknameCheck('닉네임을 입력해주세요');
    }
  };
  const handleIdCheck = () => {
    if (id) {
      dupCheckId(id)
        .then((res) => {
          setWarnIdCheck('사용 가능한 아이디입니다');
        })
        .catch((err) => {
          if (err.response.status === 409) {
            setWarnIdCheck('중복된 아이디입니다');
          }
          console.log(err);
        });
    } else {
      setWarnIdCheck('아이디를 입력해주세요');
    }
  };

  return (
    <div className="flex items-center justify-center flex-grow">
      <div className="flex flex-col items-center py-5 pl-10 pr-24 rounded shadow-md bg-blue-50 w-fit h-fit">
        <h3 className="pl-16 mb-5 text-2xl font-bold">회원가입</h3>
        <form
          onSubmit={handleJoin}
          className="flex flex-col items-center gap-1 w-fit"
        >
          <div className="flex flex-col w-full">
            <div className="relative flex items-center justify-between w-full h-fit">
              <JoinInput
                required
                label="닉네임"
                value={nickname}
                onChange={handleNicknameChange}
              />
              <JoinDupCheckButton onClick={handleNicknameCheck} />
            </div>
            <WarnText
              warnText={warnNicknameCheck}
              success={
                warnNicknameCheck !== '' && warnNicknameCheck.includes('가능')
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="relative flex items-center justify-between w-full h-fit">
              <JoinInput
                required
                label="아이디"
                value={id}
                onChange={handleIdChange}
              />
              <JoinDupCheckButton onClick={handleIdCheck} />
            </div>
            <WarnText
              warnText={warnIdCheck}
              success={warnIdCheck !== '' && warnIdCheck.includes('가능')}
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full h-fit">
              <JoinSelect
                label="아이디 질문"
                value={idQuestion}
                options={['test', 'test1', 'test2']}
                onChange={handleIdQuestionChange}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full h-fit">
              <JoinInput
                required
                label="답"
                value={idAnswer}
                onChange={handleIdAnswerChange}
              />
            </div>
            <WarnText warnText={''} />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full h-fit">
              <JoinInput
                required
                label="비밀번호"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <WarnText warnText={''} />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full h-fit">
              <JoinInput
                required
                label="비밀번호 확인"
                type="password"
                value={passwordRe}
                onChange={handlePasswordReChange}
              />
            </div>
            <WarnText warnText={wanrPasswordCheck} />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full h-fit">
              <JoinSelect
                label="비밀번호 질문"
                value={pwQuestion}
                options={['ptest', 'ptest1', 'ptest2']}
                onChange={handlePwQuestionChange}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full h-fit">
              <JoinInput
                required
                label="답"
                value={pwAnswer}
                onChange={handlePwAnswerChange}
              />
            </div>
            <WarnText warnText={''} />
          </div>
          <div className="pl-14">
            <JoinButton />
          </div>
        </form>
        <p className="mt-2 text-xs pl-14">
          이미 회원이라면?
          <a href="/login" className="ml-1 underline">
            로그인하러 가기
          </a>
        </p>
      </div>
    </div>
  );
};

export default Join;
