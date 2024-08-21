interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="p-1 text-black bg-blue-200 border-2 border-blue-400"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
