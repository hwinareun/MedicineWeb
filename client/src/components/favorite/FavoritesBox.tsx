import FavoritesDrug from './FavoriteDrug';

const FavoritesBox = () => {
  return (
    <div className="flex flex-col flex-grow p-2 rounded-lg shadow-md bg-medicineNeutral">
      <div className="p-5 text-xl font-bold text-medicineFontBlue">
        내 즐겨찾기
      </div>
      <div className="p-5">
        <FavoritesDrug />
      </div>
    </div>
  );
};

export default FavoritesBox;
