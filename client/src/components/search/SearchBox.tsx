import { KeyboardEvent, useState } from 'react';
import { PositiveButton } from '../common/Button';
import Input from '../common/Input';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setSearchItem, setSelectedDrug } from '../../store/slices/searchSlice';
import { fetchDrugs } from '../../apis/drugs.api';

const searchCategoryDrug = {
  productName: '의약품명',
  ingredients: '성분명',
  effects: '효능효과',
};

const SearchBox = () => {
  const dispatch = useDispatch();
  const { selectedDrug } = useSelector((state: RootState) => state.search);
  const [view, setView] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useState({
    productName: '',
    ingredients: '',
    effects: '',
  });
  const [query, setQuery] = useState<string>('');

  const fetchSearchResults = async () => {
    try {
      const data = await fetchDrugs({
        ...searchParams,
        productName: query,
      });

      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDropDownClick = (drug: string) => {
    dispatch(setSelectedDrug(drug));
    setSearchParams((prev) => ({
      ...prev,
      productName: drug,
    }));
  };

  const handleButtonClick = () => {
    console.log(query);
    fetchSearchResults();
  };

  const handleSearchEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log(query);
      fetchSearchResults();
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
        value={query}
        placeholder={selectedDrug}
        onChange={(e) => dispatch(setSearchItem(e.target.value))}
        onKeyDown={(e) => handleSearchEnter(e)}
      />
      <PositiveButton onClick={handleButtonClick}>확인</PositiveButton>
      {searchResults}
    </div>
  );
};

export default SearchBox;
