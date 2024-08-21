import Input from '../common/Input';
import Logo4 from '../../assets/images/Logo4.png';
import { NegativeButton, PositiveButton } from '../common/Button';
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
import { setSearchResults } from '../../store/slices/drugSlice';
import { fetchDrugs } from '../../apis/drugs.api';
import { DrugData } from '../../types/drug.type';

interface SearchFilterProps {
  setResults: (results: DrugData[]) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ setResults }) => {
  const dispatch = useDispatch();
  const {
    searchIdentification1,
    searchIdentification2,
    selectedForm,
    selectedLine,
    selectedShape,
    selectedColor,
  } = useSelector((state: RootState) => state.filter);

  const { selectedDrugCategory, searchDrug } = useSelector(
    (state: RootState) => state.drug
  );

  const filters = {
    itemName: selectedDrugCategory === '의약품명' ? searchDrug : undefined,
    ingrEngName: selectedDrugCategory === '성분명' ? searchDrug : undefined,
    ingrKorName: selectedDrugCategory === '성분명' ? searchDrug : undefined,
    efcyQesitm: selectedDrugCategory === '효능효과' ? searchDrug : undefined,
    identification1: searchIdentification1,
    identification2: searchIdentification2,
    form: selectedForm,
    line: selectedLine,
    shape: selectedShape,
    color: selectedColor,
  };

  const applyFilters = async () => {
    setResults([]);
    try {
      const data = await fetchDrugs(filters);
      dispatch(setSearchResults(data));
      setResults(data);
      console.log(filters);
    } catch (error) {
      console.error(error);
    }
  };

  const handleResetClick = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="p-5 m-5 border-t-2 border-medicinePositive">
      <div className="flex items-center justify-between gap-10 py-2">
        <div className="flex flex-col w-full gap-1">
          <p className="font-semibold">식별문자</p>
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
        <div className="w-48">
          <p className="font-semibold">식별문자 설명</p>
          <img
            src={Logo4}
            alt="drugIdentification"
            className="border-2 border-blue-400"
          />
        </div>
      </div>
      <SelectedForm />
      <SelectedLine />
      <SelectedShape />
      <SelectedColor />
      <div className="flex justify-end gap-2 pt-2">
        <PositiveButton onClick={applyFilters}>확인</PositiveButton>
        <NegativeButton onClick={handleResetClick}>초기화</NegativeButton>
      </div>
    </div>
  );
};

export default SearchFilter;
