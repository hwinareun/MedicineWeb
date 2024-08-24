import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { PositiveButton } from '../common/Button';
import React, { useState } from 'react';
import Input from '../common/Input';
import { removeDrugDataAction } from '../../store/slices/managerSlice';

const ManagerDrugRemove: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector((state: RootState) => state.manager);

  const [drugId, setDrugId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDrugId(e.target.value);
  };

  const handleRemoveClick = () => {
    if (drugId) {
      dispatch(removeDrugDataAction(Number(drugId)));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow max-h-full p-4 shadow-md bg-medicineNeutral rounded-3xl">
      <h3 className="flex items-end justify-between w-full px-5 py-1 m-1 text-left">
        데이터 삭제
        <div className="flex items-end">
          {isLoading && <p className="text-xs">삭제 중...</p>}
          {error && <p className="text-xs text-red-500">삭제 실패: {error}</p>}
          <PositiveButton onClick={handleRemoveClick}>삭제</PositiveButton>
        </div>
      </h3>
      <div className="flex flex-col w-full gap-1 px-4 overflow-y-auto text-xs">
        <Input
          value={drugId}
          placeholder={'품목번호'}
          onChange={handleChange}
          name={'drugId'}
        />
      </div>
    </div>
  );
};

export default ManagerDrugRemove;
