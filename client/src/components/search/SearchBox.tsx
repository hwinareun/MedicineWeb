import { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

const SearchBox = () => {
  const [view, setView] = useState(false);
  const [searchItem, setSearchItem] = useState('의약품명');

  const dropDown = () => {
    return (
      <div className="font-normal">
        <li>{searchItem}</li>
        <li>{searchItem}</li>
      </div>
    );
  };

  return (
    <div className="flex gap-2">
      <ul
        onClick={() => setView(!view)}
        className="flex flex-col items-center gap-1 p-2 font-bold bg-blue-200 h-fit"
      >
        <div className="flex flex-row items-center gap-1">
          {searchItem}
          {view ? <FaMinusCircle /> : <FaPlusCircle />}
        </div>
        {view && dropDown()}
      </ul>
      <Input />
      <Button>확인</Button>
    </div>
  );
};

export default SearchBox;
