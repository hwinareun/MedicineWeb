import FilterOption from './FilterOption';
import { CiTablets1 } from 'react-icons/ci';
import { GiMedicinePills, GiPill, GiPillDrop } from 'react-icons/gi';

const SelectedForm = () => {
  return (
    <div className="flex flex-col gap-1 p-2">
      <p className="pb-1 font-semibold">제형</p>
      <div className="flex flex-row gap-1 p-2 bg-medicinePrimary w-fit">
        <FilterOption
          label="정제"
          icon={CiTablets1}
          field="selectedForm"
          value="정제"
        />
        <FilterOption
          label="경질캡슐"
          icon={GiPill}
          field="selectedForm"
          value="경질캡슐"
        />
        <FilterOption
          label="연질캡슐"
          icon={GiPillDrop}
          field="selectedForm"
          value="연질캡슐"
        />
        <FilterOption
          label="기타"
          icon={GiMedicinePills}
          field="selectedForm"
          value="기타"
        />
        <FilterOption
          label="전체"
          icon={GiMedicinePills}
          field="selectedForm"
          value="전체"
        />
      </div>
    </div>
  );
};

export default SelectedForm;
