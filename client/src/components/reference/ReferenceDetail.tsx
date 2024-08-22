import { FiX } from 'react-icons/fi';
import Logo3 from '../../assets/images/Logo3.png';
import { HiOutlineStar, HiStar } from 'react-icons/hi2';

const ReferenceDetail = () => {
  return (
    <div className="px-8 py-5 bg-white shadow-sm rounded-3xl w-fit max-h-fit">
      <div className="flex justify-between py-2 m-4">
        <p className="flex items-center gap-1 text-2xl font-semibold">
          의약품명
          <HiOutlineStar className="text-3xl text-medicinePoint hover:text-medicinePositive" />
          <HiStar className="text-3xl text-medicinePoint hover:text-medicinePositive" />
        </p>
        <FiX className="text-3xl text-medicinePoint hover:text-medicinePositive" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-8">
          <img
            src={Logo3}
            className="w-48 border-2 border-medicineSecondary rounded-3xl bg-medicinePrimary"
          />
          <div>
            <div className="w-96">
              <p className="font-semibold">성분•함량</p>
              <p className="px-8 py-5 mb-2 border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
                acetaminophen 500mg
              </p>
            </div>
            <div className="w-96">
              <p className="font-semibold">제형</p>
              <p className="px-8 py-5 border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
                정제
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold">효능•효과</p>
          <p className="px-8 py-5 mb-2 border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
            통증 경감
          </p>
        </div>
        <div>
          <p className="font-semibold">복용 방법</p>
          <p className="px-8 py-5 mb-2 border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
            일 최대 3회를 넘지 않도록 하며, 적당량의 물과 함께 복용하도록 한다.
          </p>
        </div>
        <div>
          <p className="font-semibold">주의 사항</p>
          <p className="px-8 py-5 mb-2 border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
            복용 후 졸음이 있을 수 있으니, 운전과 같은 집중력이 필요한 활동은
            자제하도록 한다.
          </p>
        </div>
        <div>
          <p className="font-semibold">보관 방법</p>
          <p className="px-8 py-5 mb-2 border-2 border-medicineSecondary rounded-xl bg-medicinePrimary">
            실온 30도 이하에서 보관 가능하다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferenceDetail;
