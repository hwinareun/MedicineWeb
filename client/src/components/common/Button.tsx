interface Props {
  children: React.ReactNode;
  searchItem: string;
}

const Button = ({ children, searchItem }: Props) => {
  const handleSearch = () => {
    console.log(searchItem);
  };

  return (
    <div>
      <button
        onClick={handleSearch}
        className="p-1 text-black bg-blue-200 border-2 border-blue-400"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
