import { useState } from 'react';
import { JoinInput } from '../join/JoinInput';
import { PositiveButton } from '../common/Button';
import { checkPw } from '../../apis/auth.api';
import { WarnText } from '../common/WarnText';

interface Props {
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PwCheck: React.FC<Props> = ({ setIsChecked }) => {
  const [password, setPassword] = useState('');
  const [showWarnText, setShowWarnText] = useState(false);

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleCheck = () => {
    checkPw({ password })
      .then(() => {
        setIsChecked(true);
      })
      .catch((err) => {
        console.log(err);
        setShowWarnText(true);
      });
  };

  return (
    <div className="flex items-baseline gap-3">
      <div className="flex flex-col">
        <div>
          <JoinInput
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={handlePwChange}
          />
        </div>
        {showWarnText && <WarnText warnText="비밀번호가 틀렸습니다" />}
      </div>
      <PositiveButton onClick={handleCheck}>확인</PositiveButton>
    </div>
  );
};
