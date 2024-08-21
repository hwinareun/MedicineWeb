import { FiCircle, FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import FilterOption from './FilterOption';

const SelectedLine = () => {
  return (
    <div className="flex flex-col gap-1 p-2">
      <p className="pb-1 font-semibold">분할선</p>
      <div className="flex flex-row gap-1 p-2 bg-medicinePrimary w-fit">
        <FilterOption
          label="없음"
          icon={FiCircle}
          field="selectedLine"
          value="없음"
        />
        <FilterOption
          label="(+)형"
          icon={FiPlusCircle}
          field="selectedLine"
          value="(+)형"
        />
        <FilterOption
          label="(-)형"
          icon={FiMinusCircle}
          field="selectedLine"
          value="(-)형"
        />
        <FilterOption
          label="기타"
          icon={FiCircle}
          field="selectedLine"
          value="기타"
        />
        <FilterOption
          label="전체"
          icon={FiCircle}
          field="selectedLine"
          value="전체"
        />
      </div>
    </div>
  );
};

export default SelectedLine;
