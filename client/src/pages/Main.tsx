import { useDispatch, useSelector } from 'react-redux';
import Logo1 from '../assets/images/Logo1.png';
import Input from '../components/common/Input';
import { RootState } from '../store';
import { setSearchDrugItem, setSearchResults } from '../store/slices/drugSlice';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { PositiveButton } from '../components/common/Button';
import { fetchDrugs } from '../apis/drugs.api';
import { DrugData } from '../types/drug.type';
import { LoginBox } from '../components/login/LoginBox';
import { MainNavigator } from '../components/main/MainNavigator';

const Main: React.FC = () => {
  const [results, setResults] = useState<DrugData[]>([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { drug, auth } = useSelector((state: RootState) => state);
  const { selectedDrugCategory, searchDrug } = drug;
  const { isLogin } = auth;

  const handleSearch = async () => {
    if (!searchDrug) {
      return;
    }

    setResults([]);
    try {
      const searchResults = {
        [selectedDrugCategory]: searchDrug,
      };
      const data = await fetchDrugs(searchResults);
      const filteredData = data.filter((drug: DrugData) =>
        drug.itemName.includes(searchDrug)
      );

      dispatch(setSearchResults(filteredData));
      setResults(filteredData);

      navigate('/search', { state: { results: filteredData } });
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
    <div className="flex min-h-screen bg-blue-100">
      <div className="flex items-center justify-center pl-4 whitespace-nowrap">
        <div className="w-4/5 p-6">
          <img src={Logo1} alt="medicineWebLogo" />
          <div className="flex gap-1">
            <Input
              name="searchDrug"
              value={searchDrug}
              placeholder="의약품명(으)로 검색합니다."
              onChange={handleSearchChange}
              onKeyDown={handleSearchEnter}
            />
            <PositiveButton onClick={handleSearch}>확인</PositiveButton>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow pr-4">
        {!isLogin && <LoginBox />}
        <MainNavigator isLogin={isLogin} />
      </div>
    </div>
  );
};

export default Main;
