interface Props {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const JoinSelect: React.FC<Props> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <>
      <label className="mr-1 flex-1 text-right pb-1" htmlFor="">
        {label}:
      </label>
      <select
        name=""
        id={value}
        onChange={onChange}
        value={value}
        className="border border-blue-400 focus:outline-blue-800 placeholder:text-black-400 w-60 h-9 placeholder:text-ts rounded p-1"
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
