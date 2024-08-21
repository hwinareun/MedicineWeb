import { useDispatch, useSelector } from 'react-redux';
import Logo1 from '../assets/images/Logo1.png';
import Input from '../components/common/Input';
import { RootState } from '../store';
import { setSearchDrugItem } from '../store/slices/drugSlice';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { PositiveButton } from '../components/common/Button';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchDrug } = useSelector((state: RootState) => state.drug);

  const handleButtonClick = () => {
    navigate('/search');
    console.log(searchDrug);
  };

  const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate('/search');
      console.log(searchDrug);
    }
  };

  return (
    <div className="bg-blue-100 whitespace-nowrap">
      <div className="w-1/2 p-2 m-2">
        <img src={Logo1} alt="medicineWebLogo" className="" />
        <div className="flex gap-1">
          <Input
            value={searchDrug}
            placeholder="의약품명"
            onChange={(e) => dispatch(setSearchDrugItem(e.target.value))}
            onKeyDown={(e) => handleSearchEnter(e)}
          />
          <PositiveButton onClick={handleButtonClick}>확인</PositiveButton>
        </div>
      </div>
      {/* 로그인 */}
    </div>
  );
};

export default Main;
