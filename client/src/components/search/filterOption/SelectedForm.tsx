import FilterOption from './FilterOption';
import { CiTablets1 } from 'react-icons/ci';
import { GiMedicinePills, GiMedicines, GiPill } from 'react-icons/gi';

const SelectedForm = () => {
  return (
    <div className="flex flex-col gap-1 p-2">
      <p className="pb-1 font-semibold">제형</p>
      <div className="flex flex-row justify-center min-w-full gap-1 p-1 py-2 border-2 rounded-lg border-medicineSecondary bg-medicinePrimary">
        <FilterOption
          label="정제"
          icon={CiTablets1}
          field="selectedForm"
          value="Tablet"
        />
        <FilterOption
          label="캡슐"
          icon={GiPill}
          field="selectedForm"
          value="Capsule"
        />
        <FilterOption
          label="기타"
          icon={GiMedicines}
          field="selectedForm"
          value="ETC"
        />
        <FilterOption
          label="전체"
          icon={GiMedicinePills}
          field="selectedForm"
          value="All"
        />
      </div>
    </div>
  );
};

export default SelectedForm;
