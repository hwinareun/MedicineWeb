import Button from '../common/Button';
import Input from '../common/Input';

const SearchBox = () => {
  return (
    <div className="flex gap-2">
      <Input />
      <Button>확인</Button>
    </div>
  );
};

export default SearchBox;
