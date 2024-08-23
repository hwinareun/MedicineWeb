import { FiX } from 'react-icons/fi';
import { HiOutlineStar, HiStar } from 'react-icons/hi2';
import { DrugData } from '../../types/drug.type';

interface ReferenceDetailProps {
  drug: DrugData;
  onClose: () => void;
}

const ReferenceDetail: React.FC<ReferenceDetailProps> = ({ drug, onClose }) => {
  console.log(drug);

  const ingrEngName = drug.ingrEngName
    ? drug.ingrEngName.split(/[,;]/).map((item) => item.trim())
    : [];

  const strength = drug.strength
    ? drug.strength.split(/[,;]/).map((item) => item.trim())
    : [];

  return (
    <div className="absolute flex items-center justify-center text-left">
      <div className="px-8 py-5 bg-white shadow-sm rounded-3xl w-fit max-h-fit">
        <div className="flex justify-between py-2 m-4">
          <p className="flex items-center gap-1 text-2xl font-semibold">
            {drug.itemName}
            <HiOutlineStar className="text-3xl text-medicinePoint hover:text-medicinePositive" />
            <HiStar className="text-3xl text-medicinePoint hover:text-medicinePositive" />
          </p>
          <FiX
            className="text-3xl text-medicinePoint hover:text-medicinePositive"
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-8">
            <img
              src={drug.itemImage}
              className="h-32 border-2 w-60 border-medicineSecondary rounded-3xl bg-medicinePrimary"
            />
            <div>
              <div className="w-96">
                <p className="font-semibold">성분•함량</p>
                <p className="px-8 py-5 mb-2 border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
                  {ingrEngName.map((name, index) => (
                    <p key={index}>
                      {name} ({strength[index]})
                    </p>
                  ))}
                </p>
              </div>
              <div className="w-96">
                <p className="font-semibold">제형</p>
                <p className="px-8 py-5 border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
                  {drug.dosageForm}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold">효능•효과</p>
            <p className="px-8 py-5 mb-2 break-words whitespace-normal border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
              {drug.efcyQesitm}
            </p>
          </div>
          <div>
            <p className="font-semibold">복용 방법</p>
            <p className="px-8 py-5 mb-2 break-words whitespace-normal border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
              {drug.useMethodQesitm}
            </p>
          </div>
          <div>
            <p className="font-semibold">주의 사항</p>
            <p className="px-8 py-5 mb-2 break-words whitespace-normal border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
              {drug.seQesitm}
            </p>
          </div>
          <div>
            <p className="font-semibold">보관 방법</p>
            <p className="px-8 py-5 mb-2 break-words whitespace-normal border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
              {drug.depositMethodQesitm}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceDetail;
