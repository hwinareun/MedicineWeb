import { FiX } from 'react-icons/fi';
import { HiOutlineStar, HiStar } from 'react-icons/hi2';
import { DrugData } from '../../types/drug.type';
import unprepared from '../../assets/images/Unprepared.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import {
  addFavoriteDrug,
  removeFavoriteDrug,
} from '../../store/slices/favoriteSlice';

interface ReferenceDetailProps {
  drug: DrugData;
  onClose: () => void;
}

const ReferenceDetail: React.FC<ReferenceDetailProps> = ({ drug, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const ingrEngName = drug.ingrEngName
    ? drug.ingrEngName.split(/[,;]/).map((item) => item.trim())
    : [];

  const strength = drug.strength
    ? drug.strength.split(/[,;]/).map((item) => item.trim())
    : [];

  const [loginMessage, setLoginMessage] = useState('');
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  const [isFavorites, setIsFavorites] = useState(
    useSelector((state: RootState) =>
      state.favorite.favoriteDrugs.some(
        (favoriteDrug) => favoriteDrug.drugId === drug.drugId
      )
    )
  );

  const handleFavoriteClick = () => {
    if (!isLogin) {
      setLoginMessage(
        '로그인이 필요한 서비스입니다.\n로그인하시려면 메세지를 클릭해주세요!'
      );
      setTimeout(() => setLoginMessage(''), 2000);
      return;
    }

    if (isFavorites) {
      setIsFavorites(false);
      dispatch(removeFavoriteDrug(drug.drugId));
    } else {
      setIsFavorites(true);
      dispatch(addFavoriteDrug(drug.drugId));
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-left bg-gray-900 bg-opacity-50">
      <div className="w-full max-w-3xl px-8 py-5 bg-white shadow-sm rounded-3xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between py-2 m-4">
          <div className="flex items-center gap-1 text-2xl font-semibold">
            {drug.itemName}
            <div
              className="flex flex-row items-center gap-2 text-3xl cursor-pointer text-medicinePoint hover:text-medicinePositive"
              onClick={handleFavoriteClick}
            >
              {isFavorites ? <HiStar /> : <HiOutlineStar />}
              {loginMessage && (
                <div
                  className="text-xs text-red-500 underline cursor-pointer"
                  onClick={handleLoginClick}
                >
                  {loginMessage.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          </div>
          <FiX
            className="text-3xl cursor-pointer text-medicinePoint hover:text-medicinePositive"
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-8">
            <img
              src={drug.itemImage}
              className="h-40 border-2 w-72 border-medicineSecondary rounded-3xl bg-medicinePrimary"
              alt={drug.itemName}
            />
            <div>
              <div className="w-96">
                <p className="font-semibold">성분•함량</p>
                {ingrEngName.length > 0 ? (
                  <div className="px-8 py-2 mb-2 border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
                    {ingrEngName.map((name, index) => (
                      <div key={index}>
                        {name} ({strength[index]})
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="px-8 py-2 mb-2 border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
                    <img src={unprepared} alt="unprepared" className="w-10" />
                  </div>
                )}
              </div>
              <div className="w-96">
                <p className="font-semibold">제형</p>
                <div className="px-8 py-2 border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
                  {drug.dosageForm ? (
                    drug.dosageForm
                  ) : (
                    <img src={unprepared} alt="unprepared" className="w-10" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold">효능•효과</p>
            <p className="px-8 py-5 mb-2 break-words whitespace-normal border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
              {drug.efcyQesitm ? (
                drug.efcyQesitm
              ) : (
                <img src={unprepared} alt="unprepared" className="w-10" />
              )}
            </p>
          </div>
          <div>
            <p className="font-semibold">복용 방법</p>
            <p className="px-8 py-5 mb-2 break-words whitespace-normal border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
              {drug.useMethodQesitm ? (
                drug.useMethodQesitm
              ) : (
                <img src={unprepared} alt="unprepared" className="w-10" />
              )}
            </p>
          </div>
          <div>
            <p className="font-semibold">주의 사항</p>
            <p className="px-8 py-5 mb-2 break-words whitespace-normal border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
              {drug.seQesitm ? (
                drug.seQesitm
              ) : (
                <img src={unprepared} alt="unprepared" className="w-10" />
              )}
            </p>
          </div>
          <div>
            <p className="font-semibold">보관 방법</p>
            <p className="px-8 py-5 mb-2 break-words whitespace-normal border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
              {drug.depositMethodQesitm ? (
                drug.depositMethodQesitm
              ) : (
                <img src={unprepared} alt="unprepared" className="w-10" />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceDetail;
