import Input from '../common/Input';
import Logo4 from '../../assets/images/Logo4.png';
import Button from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  resetFilters,
  setSearchIdentification1,
  setSearchIdentification2,
} from '../../store/slices/filterSlice';
import SelectedForm from './filterOption/SelectedForm';
import SelectedLine from './filterOption/SelectedLine';
import SelectedShape from './filterOption/SelectedShape';
import SelectedColor from './filterOption/SelectedColor';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const {
    searchIdentification1,
    searchIdentification2,
    selectedForm,
    selectedLine,
    selectedShape,
    selectedColor,
  } = useSelector((state: RootState) => state.filter);

  const { searchItem, selectedDrug } = useSelector(
    (state: RootState) => state.search
  );

  const filters = {
    searchIdentification1,
    searchIdentification2,
    selectedForm,
    selectedLine,
    selectedShape,
    selectedColor,
  };

  const applyFilters = () => {
    console.log(`${selectedDrug}: ${searchItem}`);
    console.log(filters);
  };

  const handleResetClick = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="items-center justify-center p-10 m-5 text-sm whitespace-nowrap bg-sky-100">
      <div className="flex items-center justify-between gap-10 py-2">
        <div className="flex flex-col w-full gap-1">
          식별문자
          <Input
            value={searchIdentification1}
            placeholder={'문자1'}
            onChange={(e) => dispatch(setSearchIdentification1(e.target.value))}
          />
          <Input
            value={searchIdentification2}
            placeholder={'문자2'}
            onChange={(e) => dispatch(setSearchIdentification2(e.target.value))}
          />
        </div>
        <div>
          <img
            src={Logo4}
            alt="drugIdentification"
            className="w-40 border-2 border-blue-400"
          />
        </div>
      </div>
      <SelectedForm />
      <SelectedLine />
      <SelectedShape />
      <SelectedColor />
      <div className="flex justify-end gap-2">
        <Button onClick={applyFilters}>확인</Button>
        <Button onClick={handleResetClick}>초기화</Button>
      </div>
    </div>
  );
};

export default SearchFilter;
