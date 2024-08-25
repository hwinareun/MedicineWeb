import { FormEvent, useState } from 'react';
import { JoinInput } from '../join/JoinInput';
import { WarnText } from '../common/WarnText';
import { JoinSelect } from '../join/JoinSelect';
import { PositiveButton } from '../common/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface Props {
  title: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  warnText: string;
  showResetPw?: boolean;
}

export const FindUserBox: React.FC<Props> = ({
  title,
  onSubmit,
  warnText,
  showResetPw,
}) => {
  const [seperator, setSeperator] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [password, setPassword] = useState('');
  const { idQuestions, pwQuestions } = useSelector(
    (state: RootState) => state.questions
  );

  const handleSeperatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeperator(e.target.value);
  };
  const handleQuestionChange = (value: string) => {
    setQuestion(value);
  };
  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col items-center px-20 py-5 rounded shadow-md bg-blue-50 w-fit h-fit">
      <h3 className="mb-5 text-4xl font-bold">{title}</h3>
      <form
        onSubmit={(e) => {
          onSubmit(e);

          // if (title.includes('아이디')) {
          //   // 아이디 찾기
          //   setSeperator('');
          //   setAnswer('');
          // } else {
          if (password !== '' && showResetPw) {
            // 비밀번호 초기화
            setPassword('');
            setSeperator('');
            setAnswer('');
          }
          // }
        }}
        className="flex flex-col items-center gap-3 w-fit"
      >
        <div className="flex items-center justify-between w-full h-fit">
          <JoinInput
            required
            disabled={showResetPw}
            label={title.includes('아이디') ? '닉네임' : '아이디'}
            value={seperator}
            placeholder={
              title.includes('아이디')
                ? '닉네임을 입력해주세요'
                : '아이디를 입력해주세요'
            }
            onChange={handleSeperatorChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full h-fit">
            <JoinSelect
              label="질문"
              value={question}
              options={title.includes('아이디') ? idQuestions : pwQuestions}
              onChange={handleQuestionChange}
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-between w-full h-fit">
            <JoinInput
              required
              disabled={showResetPw}
              label="답"
              value={answer}
              placeholder="질문의 답을 입력해주세요"
              onChange={handleAnswerChange}
            />
          </div>
          <WarnText warnText={warnText} success={warnText.includes('성공')} />
        </div>
        {showResetPw && (
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center justify-between w-full h-fit">
              <JoinInput
                required
                type="password"
                label="비밀번호"
                value={password}
                placeholder="비밀번호를 입력하세요"
                onChange={handlePasswordChange}
              />
            </div>
            <WarnText warnText={'새로 사용할 비밀번호를 입력하세요'} success />
          </div>
        )}
        <PositiveButton onClick={() => {}}>요청하기</PositiveButton>
      </form>
    </div>
  );
};
