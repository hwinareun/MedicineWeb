interface Props {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const JoinInput: React.FC<Props> = ({
  label,
  type,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <>
      <label className="mr-1 flex-1 text-right pb-1" htmlFor="">
        {label}:
      </label>
      <input
        required
        type={type ?? 'text'}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="border border-blue-400 focus:outline-blue-800 placeholder:text-black-400 w-60 h-9 placeholder:text-ts rounded p-1"
      />
    </>
  );
};
