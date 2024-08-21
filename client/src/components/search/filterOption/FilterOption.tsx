import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { toggleSelection } from '../../../store/slices/filterSlice';

interface FilterOptionProps {
  label: string;
  icon: React.ElementType;
  field: keyof RootState['filter'];
  value: string;
  color?: string;
}

const FilterOption: React.FC<FilterOptionProps> = ({
  label,
  icon: Icon,
  field,
  value,
  color,
}) => {
  const dispatch = useDispatch();
  const isSelected = useSelector((state: RootState) =>
    state.filter[field].includes(value)
  );

  const iconStyle = color ? { color } : {};

  return (
    <div
      onClick={() => dispatch(toggleSelection({ field, value }))}
      className={`py-2 px-4 items-center text-xs text-center justify-center rounded-lg bg-medicineSecondary hover:bg-medicinePositive cursor-pointer ${isSelected ? 'bg-medicineFontBlue' : ''}`}
      role="button"
      aria-label={label}
    >
      <Icon className="m-1 text-3xl" style={iconStyle} />
      {label}
    </div>
  );
};

export default FilterOption;
