interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <div>
      <button className="p-2 text-black bg-blue-200 border-2 border-blue-400">
        {children}
      </button>
    </div>
  );
};

export default Button;
