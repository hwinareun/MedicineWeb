import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { toggleSelection } from '../../../store/slices/filterSlice';

interface FilterOptionProps {
  label: string;
  icon: React.ElementType;
  field: 'selectedForm' | 'selectedLine' | 'selectedShape' | 'selectedColor';
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
  const selectedValues = useSelector((state: RootState) => state.filter[field]);
  const isSelected = selectedValues.includes(value);

  const iconStyle = color ? { color } : {};

  const handleClick = () => {
    if (value === '') {
      selectedValues.forEach((v) => {
        if (v !== '') {
          dispatch(toggleSelection({ field, value: v }));
        }
      });
      if (!isSelected) {
        dispatch(toggleSelection({ field, value }));
      }
    } else {
      if (selectedValues.includes('')) {
        dispatch(toggleSelection({ field, value: '' }));
      }
      dispatch(toggleSelection({ field, value }));
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`px-2 m-1 flex flex-col items-center text-center shadow-sm shadow-medicinePoint justify-center rounded-lg  hover:bg-medicinePositive cursor-pointer ${isSelected ? 'bg-medicinePoint text-medicineSecondary' : 'bg-medicineSecondary'}`}
      role="button"
      aria-label={label}
    >
      <Icon className="m-1 text-2xl" style={iconStyle} />
      {label}
    </div>
  );
};

export default FilterOption;
