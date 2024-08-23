interface Props {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const JoinInput: React.FC<Props> = ({
  label,
  type,
  value,
  disabled,
  placeholder,
  onChange,
}) => {
  return (
    <>
      <label className="mr-1 flex-1 text-right text-xl" htmlFor="">
        {label}:
      </label>
      <input
        disabled={disabled}
        required
        type={type ?? 'text'}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="border border-blue-400 focus:outline-blue-800 placeholder:text-black-400 w-96 h-12 placeholder:text-lg rounded p-2"
      />
    </>
  );
};
