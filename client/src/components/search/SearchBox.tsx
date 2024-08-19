import { useEffect, useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const SearchBox = () => {
  const [view, setView] = useState(false);
  const [selectedMed, setSelectedMed] = useState('의약품명');
  const [searchItem, setSearchItem] = useState('');

  const searchMed = {
    productName: '의약품명',
    ingredients: '성분명',
    effects: '효능효과',
  };

  const handleClick = (Med: string) => {
    setSelectedMed(Med);
    setView(false);
  };

  useEffect(() => {
    setSearchItem('');
  }, [selectedMed]);

  const dropDown = () => {
    return (
      <div className="font-normal">
        <li onClick={() => handleClick(searchMed.productName)}>
          {searchMed.productName}
        </li>
        <li onClick={() => handleClick(searchMed.ingredients)}>
          {searchMed.ingredients}
        </li>
        <li onClick={() => handleClick(searchMed.effects)}>
          {searchMed.effects}
        </li>
      </div>
    );
  };

  return (
    <div className="flex flex-row gap-2 p-2">
      {/* 드롭다운 */}
      <ul
        onClick={() => setView(!view)}
        className="flex flex-col gap-1 p-2 font-bold bg-blue-200 Meds-center h-fit"
      >
        <div className="flex flex-row gap-1 Meds-center">
          {selectedMed}
          {view ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {view && dropDown()}
      </ul>
      {/* 검색어 박스, 확인 버튼 */}
      <Input
        value={searchItem}
        placeholder={selectedMed}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <Button searchItem={searchItem}>확인</Button>
    </div>
  );
};

export default SearchBox;
