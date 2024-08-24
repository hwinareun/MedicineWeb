import FavoritesDrug from './FavoriteDrug';

const FavoritesBox = () => {
  return (
    <div className="flex flex-col flex-grow p-2 pb-10 rounded-lg shadow-md bg-medicineNeutral whitespace-nowrap">
      <div className="p-5 text-xl font-bold text-medicineFontBlue">
        내 즐겨찾기
      </div>
      <div className="p-5 pt-0 overflow-y-auto border rounded-lg max-h-96 border-medicineSecondary">
        <FavoritesDrug />
      </div>
    </div>
  );
};

export default FavoritesBox;
