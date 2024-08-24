import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { updateDrugDataAction } from '../../store/slices/managerSlice';
import { PositiveButton } from '../common/Button';
import { FaSpinner } from 'react-icons/fa';

const ManagerDrugUpadate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector((state: RootState) => state.manager);

  const handleUpdateClick = () => {
    dispatch(updateDrugDataAction());
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow px-5 py-2 rounded-lg bg-medicineNeutral">
      <PositiveButton onClick={handleUpdateClick}>
        데이터 업데이트
      </PositiveButton>
      {isLoading && (
        <div className="flex items-center gap-1 p-1 text-sm text-medicineFontBlue">
          <FaSpinner className="animate-spin" />
          업데이트 중...
        </div>
      )}
      {error && <p className="text-red-500">업데이트 실패: {error}</p>}
    </div>
  );
};

export default ManagerDrugUpadate;
