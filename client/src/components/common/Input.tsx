interface Props {
  name: string;
  value: string | number;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({ name, value, placeholder, onChange, onKeyDown }: Props) => {
  return (
    <input
      id="keyword"
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full h-10 px-2 border-2 rounded-xl border-medicineSecondary bg-medicineNeutral placeholder:text-medicineSecondary placeholder:text-xs text-medicineFont"
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
