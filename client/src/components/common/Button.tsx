interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export const PositiveButton = ({ children, onClick }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="px-5 py-2 bg-medicineSecondary rounded-3xl text-medicineFontBlack hover:bg-medicinePositive"
      >
        {children}
      </button>
    </div>
  );
};

export const NegativeButton = ({ children, onClick }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="px-5 py-2 bg-medicineNegative rounded-3xl text-medicineFontBlack hover:bg-medicinePositive"
      >
        {children}
      </button>
    </div>
  );
};
