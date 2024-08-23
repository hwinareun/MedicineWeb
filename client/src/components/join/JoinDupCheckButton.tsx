interface Props {
  onClick: () => void;
}

export const JoinDupCheckButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      className="absolute right-[-70px] border text-sm ml-2 border-blue-400 bg-blue-200 w-16 h-9 rounded-lg hover:bg-blue-400 hover:text-white"
      type="button"
      onClick={onClick}
    >
      중복 확인
    </button>
  );
};
