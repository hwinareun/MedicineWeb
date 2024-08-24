import { useSelector } from 'react-redux';
import ManagerDrugUpadate from './ManagerDrugUpadate';
import { RootState } from '../../store';
import ManagerDrugAdd from './ManagerDrugAdd';
import ManagerDrugEdit from './ManagerDrugEdit';
import ManagerDrugRemove from './ManagerDrugRemove';

const ManagerBox = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  return (
    <div className="flex flex-grow w-full h-full m-10">
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="flex flex-col w-full p-10 m-5 border-b-2">
          <span className="text-3xl text-medicineFontBlue">
            관리자 전용 페이지입니다.
          </span>
          <span className="text-xs ">관리자: {userInfo.nickname}</span>
        </div>
        <div className="flex flex-row w-full gap-10 p-2 h-72">
          <ManagerDrugUpadate />
          <div className="flex items-center justify-center flex-grow px-5 py-2 bg-medicineSecondary rounded-3xl text-medicineFontBlack hover:bg-medicinePositive">
            <ManagerDrugAdd />
          </div>
          <div className="flex items-center justify-center flex-grow px-5 py-2 bg-medicineSecondary rounded-3xl text-medicineFontBlack hover:bg-medicinePositive">
            <ManagerDrugEdit />
          </div>
          <div className="flex items-center justify-center flex-grow px-5 py-2 bg-medicineSecondary rounded-3xl text-medicineFontBlack hover:bg-medicinePositive">
            <ManagerDrugRemove />
          </div>
        </div>
        {/* <div className="flex w-full h-32 m-5 rounded-lg bg-medicineNeutral">
          <div className="p-5 overflow-y-auto max-h-28">추가, 수정, 삭제</div>
        </div>
        <div className="flex w-full h-32 m-5 rounded-lg bg-medicineNeutral">
          <div className="p-5 overflow-y-auto max-h-28">resultsLog</div>
        </div> */}
      </div>
    </div>
  );
};

export default ManagerBox;
