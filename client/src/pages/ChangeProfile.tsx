import { useState } from 'react';
import { PwCheck } from '../components/changeProfile/PwCheck';

const ChangeProfile = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex-grow flex items-center justify-center">
      {isChecked ? (
        <div>개인정보수정</div>
      ) : (
        <PwCheck setIsChecked={setIsChecked} />
      )}
    </div>
  );
};

export default ChangeProfile;
