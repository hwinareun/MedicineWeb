import { KeyboardEvent, useState } from 'react';
import { PositiveButton } from '../common/Button';
import Input from '../common/Input';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setSearchItem, setSelectedDrug } from '../../store/slices/searchSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const { searchItem, selectedDrug } = useSelector(
    (state: RootState) => state.search
  );

  const [view, setView] = useState(false);

  const searchCategoryDrug = {
    productName: '의약품명',
    ingredients: '성분명',
    effects: '효능효과',
  };

  const handleDropDownClick = (drug: string) => {
    dispatch(setSelectedDrug(drug));
  };

  const handleButtonClick = () => {
    console.log(searchItem);
  };

  const handleSearchEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log(searchItem);
    }
  };

  return (
    <div className="flex flex-row justify-between gap-4 px-6 py-5 my-5">
      <ul
        onClick={() => setView(!view)}
        className="flex flex-col items-center text-sm"
      >
        <div className="flex flex-row items-center justify-center w-20 h-10 gap-1 font-semibold border-b-2 rounded-lg border-b-medicineNeutral bg-medicineSecondary">
          {selectedDrug}
          {view ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {view && (
          <div>
            <li
              className="px-4 border-b-2 bg-medicinePrimary border-b-medicineNeutral"
              onClick={() =>
                handleDropDownClick(searchCategoryDrug.productName)
              }
            >
              {searchCategoryDrug.productName}
            </li>
            <li
              className="px-4 border-b-2 bg-medicinePrimary border-b-medicineNeutral"
              onClick={() =>
                handleDropDownClick(searchCategoryDrug.ingredients)
              }
            >
              {searchCategoryDrug.ingredients}
            </li>
            <li
              className="px-4 border-b-2 bg-medicinePrimary border-b-medicineNeutral"
              onClick={() => handleDropDownClick(searchCategoryDrug.effects)}
            >
              {searchCategoryDrug.effects}
            </li>
          </div>
        )}
      </ul>
      <Input
        value={searchItem}
        placeholder={selectedDrug}
        onChange={(e) => dispatch(setSearchItem(e.target.value))}
        onKeyDown={(e) => handleSearchEnter(e)}
      />
      <PositiveButton onClick={handleButtonClick}>확인</PositiveButton>
    </div>
  );
};

export default SearchBox;
