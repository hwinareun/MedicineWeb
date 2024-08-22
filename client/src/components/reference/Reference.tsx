import { DrugReferenceData } from '../../types/drug.type';

interface ReferenceProps {
  data: DrugReferenceData[];
}

const Reference: React.FC<ReferenceProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="max-w-screen-lg p-8 mx-auto bg-medicineNeutral ">
      <table className="w-full border-2 table-fixed border-medicinePositive">
        <thead>
          <tr className="text-lg border-b-2 border-medicinePositive">
            <th className="w-12">No.</th>
            <th className="w-32 border-x border-medicinePositive">이미지</th>
            <th className="w-40">의약품명</th>
            <th className="w-40 border-x border-medicinePositive">성분</th>
            <th className="w-80">효능•효과</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {data.map((drug, index) => (
            <tr
              key={drug.drugid}
              className="border-b border-medicinePositive hover:bg-medicinePrimary"
            >
              <td className="p-2 border-medicinePositive">{index + 1}</td>
              <td className="flex justify-center p-2 border-x border-medicinePositive">
                <img
                  src={drug.itemImage}
                  alt="drugIdentification"
                  className="object-contain w-32 border-2 rounded-lg border-medicinePositive"
                />
              </td>
              <td className="p-2 ">{drug.itemName}</td>
              <td className="p-2 border-x border-medicinePositive">
                {
                  /* 성분 DB 연동 후 확인 */
                  drug.ingrEngName ? drug.ingrEngName : '-'
                }
              </td>
              <td className="p-2">{drug.efcyQesitm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reference;
