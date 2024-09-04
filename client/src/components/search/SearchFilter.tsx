import Input from '../common/Input';
import printHelp from '../../assets/images/PrintHelp.png';
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
    <div className="p-1 m-2 border-t-2 border-medicinePositive">
      <div className="flex items-center justify-between gap-6 p-1">
        <div className="flex flex-col w-full gap-1">
          <p className="font-semibold">식별문자</p>
          <Input
            value={printFront}
            placeholder={'문자1(앞)(으)로 검색합니다.'}
            onChange={(e) => dispatch(setPrintFront(e.target.value))}
            name={'printFront'}
          />
          <Input
            value={printBack}
            placeholder={'문자2(뒤)(으)로 검색합니다.'}
            onChange={(e) => dispatch(setPrintBack(e.target.value))}
            name={'printBack'}
          />
        </div>
        <div>
          <p className="font-semibold">식별문자 설명</p>
          <img
            src={printHelp}
            alt="drugPrintHelp"
            className="object-contain border-2 rounded-lg w-96 border-medicineSecondary"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <SelectedForm />
        <SelectedLine />
      </div>
      <SelectedShape />
      <SelectedColor />
      <div className="flex justify-end gap-2 p-2 pb-5">
        <PositiveButton onClick={applyFilters}>확인</PositiveButton>
        <NegativeButton onClick={handleResetClick}>초기화</NegativeButton>
      </div>
    </div>
  );
};

export default SearchFilter;
