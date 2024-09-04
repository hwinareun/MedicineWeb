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
  const [errCheck, setErrCheck] = useState({
    nickname: false,
    id: false,
  });
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
    if (
      Object.values(errCheck).every((el) => el) &&
      password !== '' &&
      password === passwordRe
    ) {
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
        .then(() => navigate('/login'))
        .catch((err) => console.log(err));
    } else {
      if (!errCheck.id || warnIdCheck.includes('중복')) {
        setWarnIdCheck('중복을 확인해주세요');
      }
      if (!errCheck.nickname || warnNicknameCheck.includes('중복')) {
        setWarnNicknameCheck('중복을 확인해주세요');
      }
      if (password !== passwordRe) {
        // 버튼 클릭 시 일치 여부 확인
        setWarnPasswordCheck('비밀번호가 일치하지 않습니다.');
      }
    }
  };
  const handleNicknameCheck = () => {
    if (nickname) {
      dupCheckNickname(nickname)
        .then(() => {
          setWarnNicknameCheck('사용 가능한 닉네임입니다');
          setErrCheck({ ...errCheck, nickname: true });
        })
        .catch((err) => {
          if (err.response.status === 409) {
            setWarnNicknameCheck('중복된 닉네임입니다');
          }
          console.log(err);
          setErrCheck({ ...errCheck, nickname: false });
        });
    } else {
      setWarnNicknameCheck('닉네임을 입력해주세요');
    }
  };
  const handleIdCheck = () => {
    if (id) {
      dupCheckId(id)
        .then(() => {
          setWarnIdCheck('사용 가능한 아이디입니다');
          setErrCheck({ ...errCheck, id: true });
        })
        .catch((err) => {
          if (err.response.status === 409) {
            setWarnIdCheck('중복된 아이디입니다');
          }
          console.log(err);
          setErrCheck({ ...errCheck, id: false });
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
                placeholder="닉네임을 입력해주세요"
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
                placeholder="아이디를 입력해주세요"
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
                placeholder="답을 입력해주세요"
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
                placeholder="비밀번호를 입력해주세요"
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
                placeholder="비밀번호를 다시 입력해주세요"
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
                placeholder="답을 입력해주세요"
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
