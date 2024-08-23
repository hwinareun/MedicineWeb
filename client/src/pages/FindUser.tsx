import { useState } from 'react';
import { FindUserBox } from '../components/findUser/FindUserBox';
import { findId, reqResetPassword, resetPassword } from '../apis/users.api';
import { useNavigate } from 'react-router-dom';

const FindUser = () => {
  const [warnTextId, setWarnTextId] = useState('');
  const [warnTextPw, setWarnTextPw] = useState('');
  const [showResetPw, setShowResetPw] = useState(false);
  const navigate = useNavigate();

  const onSubmitId = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // type에 대한 에러가 발생했지만 동작에는 문제가 없다.
    // 나중에 수정 예정
    const nickname = e.target[0].value;
    const question = e.target[1].value;
    const answer = e.target[2].value;

    findId({ nickname, question, answer })
      .then((res) => {
        setWarnTextId(`성공! 아이디는 '${res.id}' 입니다`);
      })
      .catch((err) => {
        console.log(err);
        setWarnTextId('아이디를 찾을 수 없습니다');
      });
  };
  const onSubmitPw = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const id = e.target[0].value;
    const question = e.target[1].value;
    const answer = e.target[2].value;
    const password = e.target[3].value;

    if (showResetPw) {
      resetPassword({ id, password })
        .then((res) => {
          if (
            confirm('비밀번호 변경에 성공했습니다. 로그인하러 이동하겠습니까?')
          ) {
            // 로그인 화면 이동
            navigate('/login');
          } else {
            // 로그인 화면으로 이동하지 않는 상황
            setShowResetPw(false);
            setWarnTextPw('');
          }
        })
        .catch((err) => {
          console.log(err);
          setWarnTextPw('비밀번호 변경에 실패했습니다');
        });
    } else {
      reqResetPassword({ id, question, answer })
        .then((res) => {
          // 리셋 요청 성공 시 비밀번호 input 보이기
          setShowResetPw(true);
          setWarnTextPw('비밀번호를 초기화 요청에 성공했습니다');
        })
        .catch((err) => {
          console.log(err);
          setWarnTextPw('질문에 대한 답이 잘못되었습니다');
        });
    }
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-evenly">
      <FindUserBox
        title="아이디 찾기"
        warnText={warnTextId}
        onSubmit={onSubmitId}
      />
      <FindUserBox
        title="비밀번호 초기화"
        warnText={warnTextPw}
        onSubmit={onSubmitPw}
        showResetPw={showResetPw}
      />
    </div>
  );
};

export default FindUser;
