import { KeyboardEvent, useState } from 'react';
import { PositiveButton } from '../common/Button';
import Input from '../common/Input';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  setSearchResults,
  setSelectedDrugCategory,
  setSearchDrugItem,
} from '../../store/slices/drugSlice';
import { fetchDrugs } from '../../apis/drugs.api';
import { DrugData } from '../../types/drug.type';

export interface SearchBoxProps {
  setResults: (results: DrugData[]) => void;
}

const searchCategoryDrug = {
  itemName: '의약품명',
  ingrName: '성분명',
  efcyQesitm: '효능효과',
};

const SearchBox: React.FC<SearchBoxProps> = ({ setResults }) => {
  const dispatch = useDispatch();
  const { selectedDrugCategory, searchDrug } = useSelector(
    (state: RootState) => state.drug
  );
  const [view, setView] = useState(false);

  const handleDropDownClick = (drug: string) => {
    dispatch(setSelectedDrugCategory(drug));
  };

  const handleSearch = async () => {
    if (!searchDrug) {
      return;
    }
    setResults([]);
    try {
      const results = {
        [selectedDrugCategory]: searchDrug,
      };

      const data = await fetchDrugs(results);

      let filteredData: DrugData[] = [];
      switch (selectedDrugCategory) {
        case '의약품명':
          filteredData = data.filter((drug: DrugData) =>
            drug.itemName?.includes(searchDrug)
          );
          break;
        case '성분명':
          filteredData = data.filter(
            (drug: DrugData) =>
              drug.ingrEngName?.includes(searchDrug) ||
              drug.ingrKorName?.includes(searchDrug)
          );
          break;
        case '효능효과':
          filteredData = data.filter((drug: DrugData) =>
            drug.efcyQesitm?.includes(searchDrug)
          );
          break;
        default:
          filteredData = data;
          break;
      }

      dispatch(setSearchResults(filteredData));
      setResults(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchDrugItem(event.target.value));
  };

  return (
    <div className="flex flex-row items-center justify-between gap-4 px-5 pt-2">
      <ul
        onClick={() => setView(!view)}
        className="flex flex-col items-center text-sm"
      >
        <div className="flex flex-row items-center justify-center w-20 h-10 gap-1 font-semibold border-b-2 rounded-lg cursor-pointer border-b-medicineNeutral bg-medicineSecondary hover:bg-medicinePositive">
          {selectedDrugCategory}
          {view ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {view && (
          <div>
            {Object.entries(searchCategoryDrug).map(([key, value]) => (
              <li
                key={key}
                className="px-4 border-b-2 cursor-pointer bg-medicinePrimary border-b-medicineNeutral"
                onClick={() => handleDropDownClick(value)}
              >
                {value}
              </li>
            ))}
          </div>
        )}
      </ul>
      <Input
        value={searchDrug}
        placeholder={`${selectedDrugCategory as string}(으)로 검색합니다.`}
        onChange={handleSearchChange}
        onKeyDown={handleSearchEnter}
        name={'searchDrug'}
      />
      <PositiveButton onClick={handleSearch}>확인</PositiveButton>
    </div>
  );
};

export default SearchBox;
