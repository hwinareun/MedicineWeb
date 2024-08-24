import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useEffect, useState } from 'react';
import {
  fetchFavoriteDrugs,
  removeFavoriteDrug,
} from '../../store/slices/favoriteSlice';
import { TbSquareMinusFilled } from 'react-icons/tb';
import React from 'react';
import unprepared from '../../assets/images/Unprepared.png';
import { DrugData } from '../../types/drug.type';

const FavoritesDrug: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { favoriteDrugs } = useSelector((state: RootState) => state.favorite);
  const [selectedDrugId, setSelectedDrugId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchFavoriteDrugs());
  }, [dispatch]);

  const handleRemoveFavorite = (drugId: number) => {
    dispatch(removeFavoriteDrug(drugId));
  };

  const handleClick = (drugId: number | null) => {
    setSelectedDrugId((prevSelectedDrugId: number | null) =>
      prevSelectedDrugId === drugId ? null : drugId
    );
  };

  const ingrEngName = (drug: DrugData) => {
    if (drug.ingrEngName) {
      return drug.ingrEngName.split(/[,;]/).map((item) => item.trim());
    } else {
      return [];
    }
  };

  const strength = (drug: DrugData) => {
    if (drug.strength) {
      return drug.strength.split(/[,;]/).map((item) => item.trim());
    } else {
      return [];
    }
  };

  return (
    <div>
      <div></div>
      {favoriteDrugs.length > 0 ? (
        <ul className="flex flex-col max-w-lg py-3 text-sm">
          {favoriteDrugs.map((drug) => (
            <React.Fragment key={drug.drugId}>
              <li
                className="flex items-center justify-between gap-1 p-2 m-1 rounded-lg shadow-md hover:bg-medicineSecondary bg-medicinePrimary"
                onClick={() => handleClick(drug.drugId)}
              >
                {drug.itemName}
                <button
                  onClick={() => {
                    handleRemoveFavorite(drug.drugId);
                  }}
                  className="flex flex-row items-center text-xs text-medicinePositive hover:text-medicineFontBlue"
                >
                  <TbSquareMinusFilled className="text-base" /> 삭제
                </button>
              </li>
              {selectedDrugId === drug.drugId && (
                <li className="p-2 m-1 text-xs rounded-lg shadow-inner bg-medicinePrimary">
                  <div className="flex justify-center">
                    <img
                      src={drug.itemImage}
                      className="w-48 border-2 h-28 border-medicineSecondary rounded-2xl bg-medicinePrimary"
                      alt={drug.itemName}
                    />
                  </div>
                  <div className="pt-2">
                    <p className="font-semibold">성분•함량</p>
                    <p className="px-2 py-1 mb-2 break-words whitespace-normal border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
                      {ingrEngName(drug).length > 0 ? (
                        <div>
                          {ingrEngName(drug).map((name, index) => (
                            <div key={index}>
                              {name} ({strength(drug)[index]})
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div>
                          <img
                            src={unprepared}
                            alt="unprepared"
                            className="w-8"
                          />
                        </div>
                      )}
                    </p>
                  </div>
                  <div className="pt-2">
                    <p className="font-semibold">효능•효과</p>
                    <p className="px-2 py-1 mb-2 break-words whitespace-normal border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
                      {drug.efcyQesitm ? (
                        drug.efcyQesitm
                      ) : (
                        <img
                          src={unprepared}
                          alt="unprepared"
                          className="w-8"
                        />
                      )}
                    </p>
                  </div>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      ) : (
        <div>즐겨찾기 한 의약품이 없습니다.</div>
      )}
    </div>
  );
};

export default FavoritesDrug;
