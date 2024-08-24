import ManagerDrugUpadate from './ManagerDrugUpadate';
import ManagerDrugAdd from './ManagerDrugAdd';
import ManagerDrugEdit from './ManagerDrugEdit';
import ManagerDrugRemove from './ManagerDrugRemove';

const ManagerBox = () => {
  return (
    <div className="flex flex-grow w-full h-full m-8 whitespace-nowrap">
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="flex justify-between w-full px-10 pb-3 mx-2 border-b-2 border-medicineSecondary">
          <span className="text-3xl text-medicineFontBlue">
            관리자 전용 페이지
          </span>
          <ManagerDrugUpadate />
        </div>
        <div className="flex flex-1 max-h-[70vh] gap-5 mt-5">
          <ManagerDrugAdd />
          <ManagerDrugEdit />
          <ManagerDrugRemove />
        </div>
      </div>
    </div>
  );
};

export default ManagerBox;
