import { useDispatch, useSelector } from 'react-redux';
import Logo1 from '../assets/images/Logo1.png';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { RootState } from '../store';
import { setSearchItem } from '../store/slices/searchSlice';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchItem } = useSelector((state: RootState) => state.search);

  const handleButtonClick = () => {
    navigate('/search');
    console.log(searchItem);
  };

  const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate('/search');
      console.log(searchItem);
    }
  };

  return (
    <div className="bg-blue-100 whitespace-nowrap">
      {/* 로고 & 검색어 박스 */}
      <div className="w-1/2 p-2 m-2">
        <img src={Logo1} alt="medicineWebLogo" className="" />
        <div className="flex gap-1">
          <Input
            value={searchItem}
            placeholder="의약품명"
            onChange={(e) => dispatch(setSearchItem(e.target.value))}
            onKeyDown={(e) => handleSearchEnter(e)}
          />
          <Button onClick={handleButtonClick}>확인</Button>
        </div>
      </div>
      {/* 로그인 기능 구현 후 적용 */}
    </div>
  );
};

export default Main;
