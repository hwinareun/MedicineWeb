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
import { FaList, FaSearch, FaUserAlt } from 'react-icons/fa';
import clsx from 'clsx';
import { FiLogIn } from 'react-icons/fi';
import { storeLogout } from '../store/slices/authSlice';

const Main: React.FC<SearchBoxProps> = ({ setResults }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { drug, auth } = useSelector((state: RootState) => state);
  const { selectedDrugCategory, searchDrug } = drug;
  const { isLogin } = auth;

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
  const handleMyProfileClick = () => {
    navigate('/myprofile');
  };
  const handleLogout = () => {
    dispatch(storeLogout());
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
        {!isLogin && <LoginBox />}
        <div
          className={clsx(
            'flex h-fit w-full',
            !isLogin && 'justify-evenly mt-10',
            isLogin && 'flex-col gap-10 items-center'
          )}
        >
          <div
            className="flex items-center gap-2 cursor-pointer text-xl w-fit"
            onClick={handleSearchClick}
          >
            <FaSearch /> {isLogin ? '상세 검색 하러 가기' : '상세 검색'}
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer text-xl"
            onClick={handlePostsClick}
          >
            <FaList /> {isLogin ? '게시판 보러 가기' : '게시판'}
          </div>
          {isLogin && (
            <>
              <div
                className="flex items-center gap-2 cursor-pointer text-xl"
                onClick={handleMyProfileClick}
              >
                <FaUserAlt /> 마이프로필
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer text-xl"
                onClick={handleLogout}
              >
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
