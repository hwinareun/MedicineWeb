interface Props {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({ value, placeholder, onChange, onKeyDown }: Props) => {
  return (
    <input
      id="keyword"
      type="text"
      value={value}
      placeholder={` ${placeholder}(으)로 검색합니다.`}
      onChange={onChange}
      className="w-full bg-blue-200 border-2 border-blue-400 placeholder:text-blue-400 h-9 placeholder:text-xs"
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
