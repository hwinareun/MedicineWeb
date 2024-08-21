import { useState } from 'react';
import Button from '../common/Button';
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

  const handleSearchEnter = (e) => {
    if (e.key === 'Enter') {
      console.log(searchItem);
    }
  };

  return (
    <div className="flex flex-row gap-2 px-6 whitespace-nowrap">
      {/* 드롭다운 */}
      <ul
        onClick={() => setView(!view)}
        className="flex flex-col gap-1 p-2 font-bold bg-blue-200 h-fit"
      >
        <div className="flex flex-row gap-1">
          {selectedDrug}
          {view ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {view && (
          <div>
            <li
              onClick={() =>
                handleDropDownClick(searchCategoryDrug.productName)
              }
            >
              {searchCategoryDrug.productName}
            </li>
            <li
              onClick={() =>
                handleDropDownClick(searchCategoryDrug.ingredients)
              }
            >
              {searchCategoryDrug.ingredients}
            </li>
            <li onClick={() => handleDropDownClick(searchCategoryDrug.effects)}>
              {searchCategoryDrug.effects}
            </li>
          </div>
        )}
      </ul>
      {/* 검색어 박스, 확인 버튼 */}
      <Input
        value={searchItem}
        placeholder={selectedDrug}
        onChange={(e) => dispatch(setSearchItem(e.target.value))}
        onKeyDown={(e) => handleSearchEnter(e)}
      />
      <Button onClick={handleButtonClick}>확인</Button>
    </div>
  );
};

export default SearchBox;
