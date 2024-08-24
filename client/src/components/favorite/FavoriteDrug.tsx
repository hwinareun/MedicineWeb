import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useEffect } from 'react';
import {
  fetchFavoriteDrugs,
  removeFavoriteDrug,
} from '../../store/slices/favoriteSlice';

const FavoritesDrug: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { favoriteDrugs } = useSelector((state: RootState) => state.favorite);

  useEffect(() => {
    dispatch(fetchFavoriteDrugs());
  }, [dispatch]);

  const handleRemoveFavorite = (drugId: number) => {
    dispatch(removeFavoriteDrug(drugId));
  };

  return (
    <div>
      <div></div>
      {favoriteDrugs.length > 0 ? (
        <ul>
          {favoriteDrugs.map((drug) => (
            <li key={drug.drugId}>
              {drug.itemName}
              <button onClick={() => handleRemoveFavorite(drug.drugId)}>
                remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>즐겨찾기 한 의약품이 없습니다.</div>
      )}
    </div>
  );
};

export default FavoritesDrug;
