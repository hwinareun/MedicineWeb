import { useDispatch, useSelector } from 'react-redux';
import Logo1 from '../assets/images/Logo1.png';
import Input from '../components/common/Input';
import { RootState } from '../store';
import { setSearchDrugItem, setSearchResults } from '../store/slices/drugSlice';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { PositiveButton } from '../components/common/Button';
import { SearchBoxProps } from '../components/search/SearchBox';
import { fetchDrugs } from '../apis/drugs.api';
import { DrugData } from '../types/drug.type';

const Main: React.FC<SearchBoxProps> = ({ setResults }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedDrugCategory, searchDrug } = useSelector(
    (state: RootState) => state.drug
  );

  const handleSearch = async () => {
    navigate('/search');

    if (!searchDrug) {
      return;
    }

    setResults([]);
    try {
      const results = {
        [selectedDrugCategory]: searchDrug,
      };
      const data = await fetchDrugs(results);
      const filteredData = data.filter((drug: DrugData) =>
        drug.itemName.includes(searchDrug)
      );

      dispatch(setSearchResults(filteredData));
      setResults(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchDrugItem(event.target.value));
  };

  return (
    <div className="bg-blue-100 whitespace-nowrap">
      <div className="w-1/2 p-2 m-2">
        <img src={Logo1} alt="medicineWebLogo" className="" />
        <div className="flex gap-1">
          <Input
            value={searchDrug}
            placeholder="의약품명"
            onChange={handleSearchChange}
            onKeyDown={handleSearchEnter}
          />
          <PositiveButton onClick={handleSearch}>확인</PositiveButton>
        </div>
      </div>
      {/* 로그인 */}
    </div>
  );
};

export default Main;
