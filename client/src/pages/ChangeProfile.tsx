import { useState } from 'react';
import { PwCheck } from '../components/changeProfile/PwCheck';
import { ChangeProfileBox } from '../components/changeProfile/ChangeProfileBox';

const ChangeProfile = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex-grow flex items-center justify-center">
      {isChecked ? (
        <ChangeProfileBox />
      ) : (
        <PwCheck setIsChecked={setIsChecked} />
      )}
    </div>
  );
};

export default ChangeProfile;
