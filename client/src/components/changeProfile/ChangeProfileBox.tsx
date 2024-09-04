import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JoinInput } from '../join/JoinInput';
import { PositiveButton } from '../common/Button';
import { WarnText } from '../common/WarnText';
import { JoinDupCheckButton } from '../join/JoinDupCheckButton';
import { dupCheckNickname } from '../../apis/dupCheck.api';
import {
  changeProfile,
  ChangeProfileData,
  getProfile,
} from '../../apis/auth.api';
import { useDispatch } from 'react-redux';
import { storeUserInfo } from '../../store/slices/authSlice';

export const ChangeProfileBox = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRe, setPasswordRe] = useState('');
  const [wanrPasswordCheck, setWarnPasswordCheck] = useState('');
  const [warnNicknameCheck, setWarnNicknameCheck] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handlePasswordReChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordRe(e.target.value);
  };
  const handleChangeProfile = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let flag = false;
    if (password !== passwordRe) {
      setWarnPasswordCheck('비밀번호가 일치하지 않습니다');
    } else {
      setWarnPasswordCheck('');
    }
    // 둘 모두 안 변경
    if (nickname === '' && password === '' && passwordRe === '') return;
    else if (nickname === '' && password !== '' && passwordRe !== '') {
      // 비번만 변경
      flag = true;
      if (password !== passwordRe) {
        flag = false;
      }
    } else if (nickname !== '' && password === '' && passwordRe === '') {
      // 닉네임만 변경
      if (warnNicknameCheck.includes('가능')) {
        flag = true;
      }
    } else {
      // 둘다 변경
      if (warnNicknameCheck.includes('가능') && password === passwordRe) {
        flag = true;
      }
    }

    if (flag) {
      const data: ChangeProfileData = {};
      if (nickname) data.nickname = nickname;
      if (password) data.password = password;
      // 수정 요청
      changeProfile(data)
        .then(() => {
          getProfile()
            .then((res) => {
              dispatch(storeUserInfo(res));
              navigate('/myprofile');
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setNickname('');
    setPassword('');
    setPasswordRe('');
    setWarnNicknameCheck('');
    setWarnPasswordCheck('');
  };
  const handleNicknameCheck = () => {
    if (nickname) {
      dupCheckNickname(nickname)
        .then(() => {
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

  return (
    <div className="flex flex-col items-center py-5 pl-10 pr-24 rounded shadow-md bg-blue-50 w-fit h-fit">
      <h3 className="pl-16 mb-5 text-2xl font-bold">개인 정보 수정</h3>
      <form
        onSubmit={handleChangeProfile}
        className="flex flex-col items-center gap-1 w-fit"
      >
        <div className="flex flex-col w-full">
          <div className="relative flex items-center justify-between w-full h-fit">
            <JoinInput
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
          <div className="flex items-center justify-between w-full h-fit">
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
          <div className="flex items-center justify-between w-full h-fit">
            <JoinInput
              label="비밀번호 확인"
              type="password"
              value={passwordRe}
              onChange={handlePasswordReChange}
            />
          </div>
          <WarnText warnText={wanrPasswordCheck} />
        </div>
        <div className="pl-14">
          <PositiveButton onClick={() => {}}>확인</PositiveButton>
        </div>
      </form>
    </div>
  );
};
