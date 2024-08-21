import { KeyboardEvent, useState } from 'react';
import { PositiveButton } from '../common/Button';
import Input from '../common/Input';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { DrugData } from '../../types/drug.type';
import {
  setSearchResults,
  setSelectedDrugCategory,
} from '../../store/slices/drugSlice';

const searchCategoryDrug = {
  productName: '의약품명',
  ingredients: '성분명',
  effects: '효능효과',
};

const SearchBox = () => {
  const dispatch = useDispatch();
  const { selectedDrugCategory } = useSelector(
    (state: RootState) => state.drug
  );
  const drugItems = useSelector((state: RootState) => state.drug.data);
  const [view, setView] = useState(false);
  const [drug, setDrug] = useState<string>('');

  const handleDropDownClick = (drug: string) => {
    dispatch(setSelectedDrugCategory(drug));
  };

  const handleSearch = () => {
    const drugWithOutSpaces = drug.replace(/\s/g, '').toLowerCase();

    const keywords = drug
      .toLowerCase()
      .split(' ')
      .filter((keyword) => keyword.trim() !== '');

    const searchDrugs =
      keywords.length > 0
        ? drugItems.filter(
            (item: DrugData) =>
              keywords.every((keyword) =>
                item.productName.toLowerCase().includes(keyword)
              ) ||
              item.productName
                .toLowerCase()
                .replace(/\s/g, '')
                .includes(drugWithOutSpaces)
          )
        : [];

    console.log(searchDrugs);
    dispatch(setSearchResults(searchDrugs));
  };

  const handleSearchEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDrug(event.target.value);
  };

  return (
    <div className="flex flex-row justify-between gap-4 px-6 py-5 my-5">
      <ul
        onClick={() => setView(!view)}
        className="flex flex-col items-center text-sm"
      >
        <div className="flex flex-row items-center justify-center w-20 h-10 gap-1 font-semibold border-b-2 rounded-lg border-b-medicineNeutral bg-medicineSecondary">
          {selectedDrugCategory}
          {view ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {view && (
          <div>
            {Object.entries(searchCategoryDrug).map(([key, value]) => (
              <li
                key={key}
                className="px-4 border-b-2 bg-medicinePrimary border-b-medicineNeutral"
                onClick={() => handleDropDownClick(value)}
              >
                {value}
              </li>
            ))}
          </div>
        )}
      </ul>
      <Input
        value={drug}
        placeholder={selectedDrugCategory as string}
        onChange={handleSearchChange}
        onKeyDown={(e) => handleSearchEnter(e)}
      />
      <PositiveButton onClick={handleSearch}>확인</PositiveButton>
    </div>
  );
};

export default SearchBox;
