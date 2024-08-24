import { useDispatch, useSelector } from 'react-redux';
import Logo1 from '../assets/images/Logo1.png';
import Icon from '../assets/images/Icon.png';
import Input from '../components/common/Input';
import { RootState } from '../store';
import { setSearchDrugItem, setSearchResults } from '../store/slices/drugSlice';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { PositiveButton } from '../components/common/Button';
import { fetchDrugs } from '../apis/drugs.api';
import { DrugData } from '../types/drug.type';
import { LoginBox } from '../components/login/LoginBox';
import { FaList, FaSearch, FaUserAlt } from 'react-icons/fa';
import clsx from 'clsx';
import { FiLogIn } from 'react-icons/fi';
import { storeLogout } from '../store/slices/authSlice';

const Main: React.FC = () => {
  const [results, setResults] = useState<DrugData[]>([]);
  console.log(results);

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
  const handleSearchClick = () => {
    navigate('/search');
  };
  const handlePostsClick = () => {
    navigate('/posts');
  };
  const handleMyProfileClick = () => {
    navigate('/myprofile');
  };
  const handleLogout = () => {
    dispatch(storeLogout());
  };

  return (
    <div className="flex min-h-screen bg-blue-100">
      <div className="flex items-center justify-center pl-4 whitespace-nowrap">
        <div className="w-4/5 p-6">
          <img src={Logo1} alt="medicineWebLogo" />
          <div className="flex gap-1">
            <Input
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
        <div
          className={clsx(
            'flex h-fit w-80',
            !isLogin && 'justify-between mt-10',
            isLogin && 'flex-col gap-10 items-center'
          )}
        >
          <div
            className="relative flex items-center gap-2 text-xl cursor-pointer w-fit"
            onClick={handleSearchClick}
          >
            <img
              src={Icon}
              alt="medicineWebIcon"
              className="absolute w-10 top-[-27px] right-0"
            />
            <FaSearch /> 상세 검색
          </div>
          <div
            className="relative flex items-center gap-2 text-xl cursor-pointer"
            onClick={handlePostsClick}
          >
            <img
              src={Icon}
              alt="medicineWebIcon"
              className="absolute w-10 top-[-20px] left-[-25px] -rotate-45"
            />
            <FaList /> 게시판
          </div>
          {isLogin && (
            <>
              <div
                className="relative flex items-center gap-2 text-xl cursor-pointer"
                onClick={handleMyProfileClick}
              >
                <img
                  src={Icon}
                  alt="medicineWebIcon"
                  className="absolute w-10 top-[-18px] right-[-28px] rotate-45"
                />
                <FaUserAlt /> 마이프로필
              </div>
              <div
                className="relative flex items-center justify-center gap-2 text-xl cursor-pointer"
                onClick={handleLogout}
              >
                <img
                  src={Icon}
                  alt="medicineWebIcon"
                  className="absolute w-10 top-[-27px]"
                />
                <FiLogIn /> 로그아웃
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
