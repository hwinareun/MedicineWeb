import { FiHelpCircle, FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import FilterOption from './FilterOption';

const SelectedLine = () => {
  return (
    <div className="flex flex-col gap-1 p-2">
      <p className="pb-1 font-semibold">분할선</p>
      <div className="flex flex-row justify-center min-w-full gap-1 px-6 py-2 border-2 rounded-lg border-medicineSecondary bg-medicinePrimary">
        <FilterOption
          label="(+)형"
          icon={FiPlusCircle}
          field="selectedLine"
          value="+"
        />
        <FilterOption
          label="(-)형"
          icon={FiMinusCircle}
          field="selectedLine"
          value="-"
        />
        <FilterOption
          label="전체"
          icon={FiHelpCircle}
          field="selectedLine"
          value=""
        />
      </div>
    </div>
  );
};

export default SelectedLine;
