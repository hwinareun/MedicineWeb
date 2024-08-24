import ManagerDrugUpadate from './ManagerDrugUpadate';
import ManagerDrugAdd from './ManagerDrugAdd';
import ManagerDrugEdit from './ManagerDrugEdit';
import ManagerDrugRemove from './ManagerDrugRemove';

const ManagerBox = () => {
  return (
    <div className="flex flex-grow w-full h-full m-10">
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="flex justify-between w-full px-10 pb-3 mx-2 border-b-2 border-medicineSecondary">
          <span className="text-3xl text-medicineFontBlue">
            관리자 전용 페이지
          </span>
          <ManagerDrugUpadate />
        </div>
        <div className="flex flex-col w-full gap-2 py-2 h-72">
          <ManagerDrugAdd />
          <div className="flex items-center justify-center flex-grow px-5 py-2 bg-medicineSecondary rounded-3xl text-medicineFontBlack hover:bg-medicinePositive">
            <ManagerDrugEdit />
          </div>
          <div className="flex items-center justify-center flex-grow px-5 py-2 bg-medicineSecondary rounded-3xl text-medicineFontBlack hover:bg-medicinePositive">
            <ManagerDrugRemove />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerBox;
