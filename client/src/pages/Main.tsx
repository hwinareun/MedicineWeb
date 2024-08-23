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
import { LoginBox } from '../components/login/LoginBox';
import { FaList, FaSearch } from 'react-icons/fa';

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
  const handleSearchClick = () => {
    navigate('/search');
  };
  const handlePostsClick = () => {
    navigate('/posts');
  };

  return (
    <div className="min-h-screen flex bg-blue-100">
      <div className="flex items-center justify-center pl-4 whitespace-nowrap">
        <div className="w-4/5 p-6">
          <img src={Logo1} alt="medicineWebLogo" />
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
      </div>
      <div className="pr-4 flex flex-col items-center justify-center flex-grow">
        <LoginBox />
        <div className="flex h-fit w-full justify-evenly mt-10">
          <div
            className="flex items-center gap-2 cursor-pointer text-xl"
            onClick={handleSearchClick}
          >
            <FaSearch /> 상세 검색
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer text-xl"
            onClick={handlePostsClick}
          >
            <FaList /> 게시판
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
