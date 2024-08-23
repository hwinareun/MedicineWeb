import Input from '../common/Input';
import Logo4 from '../../assets/images/Logo4.png';
import { NegativeButton, PositiveButton } from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  resetFilters,
  setPrintFront,
  setPrintBack,
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
    printFront,
    printBack,
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
    printFront: printFront || undefined,
    printBack: printBack || undefined,
    dosageForm: selectedForm.length > 0 ? selectedForm.join(',') : undefined,
    drugShape: selectedShape.length > 0 ? selectedShape.join(',') : undefined,
    colorClass1: selectedColor.length > 0 ? selectedColor[0] : undefined,
    colorClass2: selectedColor.length > 1 ? selectedColor[1] : undefined,
    lineFront: selectedLine.length > 0 ? selectedLine[0] : undefined,
    lineBack: selectedLine.length > 1 ? selectedLine[1] : undefined,
  };

  const applyFilters = async () => {
    setResults([]);
    try {
      const data = await fetchDrugs(filters);

      dispatch(setSearchResults(data));
      setResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleResetClick = () => {
    dispatch(resetFilters());
    setResults([]);
  };

  return (
    <div className="p-5 m-5 border-t-2 border-medicinePositive">
      <div className="flex items-center justify-between gap-6 py-2">
        <div className="flex flex-col w-full gap-1">
          <p className="font-semibold">식별문자</p>
          <Input
            value={printFront}
            placeholder={'문자1(앞)'}
            onChange={(e) => dispatch(setPrintFront(e.target.value))}
          />
          <Input
            value={printBack}
            placeholder={'문자2(뒤)'}
            onChange={(e) => dispatch(setPrintBack(e.target.value))}
          />
        </div>
        <div>
          <p className="font-semibold">식별문자 설명</p>
          <img
            src={Logo4}
            alt="drugIdentification"
            className="object-contain w-32 border-2 rounded-lg border-medicineSecondary"
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
