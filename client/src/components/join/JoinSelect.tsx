import { useEffect } from 'react';

interface Props {
  label: string;
  options: string[];
  value: string;
  //   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChange: (value: string) => void;
}

export const JoinSelect: React.FC<Props> = ({
  label,
  options,
  value,
  onChange,
}) => {
  useEffect(() => {
    // 초기 질문 값 저장
    onChange(options[0]);
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label className="mr-1 flex-1 text-right text-xl" htmlFor="">
        {label}:
      </label>
      <select
        name=""
        id={value}
        onChange={handleOnChange}
        value={value}
        className="border border-blue-400 focus:outline-blue-800 placeholder:text-black-400 w-96 h-12 placeholder:text-lg rounded p-1"
      >
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </>
  );
};
