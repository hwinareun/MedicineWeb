import { useSelector } from 'react-redux';
import { DrugReferenceData } from '../../types/drug.type';
import Pagination from '../common/Pagination';
import { RootState } from '../../store';
import { FaSearch } from 'react-icons/fa';

interface ReferenceProps {
  data: DrugReferenceData[];
}

const cutPrefixSuffix = (description: string): string => {
  if (!description) {
    return '';
  }

  const prefix = '이 약은';
  const suffix1 = '에 사용합니다.';
  const suffix2 = '으로 사용합니다.';

  let result = description.trim();

  if (result.startsWith(prefix)) {
    result = result.slice(prefix.length).trim();
  }
  if (result.endsWith(suffix1)) {
    result = result.slice(0, -suffix1.length).trim();
  } else if (result.endsWith(suffix2)) {
    result = result.slice(0, -suffix2.length).trim();
  }

  return result;
};

const Reference: React.FC<ReferenceProps> = ({ data }) => {
  const currentPage = useSelector((state: RootState) => state.drug.currentPage);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-screen-lg p-4 mx-auto text-xs bg-medicineNeutral whitespace-nowrap">
      <p className="flex items-center gap-1 my-4 text-base font-semibold text-left">
        <FaSearch />
        검색 결과
      </p>
      <table className="w-full border-2 table-fixed border-medicinePositive">
        <thead>
          <tr className="text-base border-b-2 border-medicinePositive bg-medicinePrimary">
            <th className="w-10 border-r border-medicinePositive">No.</th>
            <th className="w-32 ">이미지</th>
            <th className="w-24 border-x border-medicinePositive">의약품명</th>
            <th className="w-32 ">성분</th>
            <th className="border-l w-80 border-medicinePositive">효능•효과</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {currentItems.map((drug, index) => (
            <tr
              key={drug.drugId}
              className="border-b border-medicinePositive hover:bg-medicinePrimary"
            >
              <td className="p-2 border-r border-medicinePositive">
                {startIndex + index + 1}
              </td>
              <td className="flex justify-center m-2">
                <img
                  src={drug.itemImage}
                  alt="drugIdentification"
                  className="object-contain w-32 border-2 rounded-lg border-medicinePositive"
                />
              </td>
              <td className="p-2 break-words whitespace-normal border-x border-medicinePositive">
                {drug.itemName}
              </td>
              <td className="p-2 border-x border-medicinePositive">
                {
                  /* 성분 DB 연동 후 확인 */
                  drug.ingrEngName ? drug.ingrEngName : '-'
                }
              </td>
              <td className="p-3 break-words whitespace-normal border-l border-medicinePositive">
                {cutPrefixSuffix(drug.efcyQesitm)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination totalItems={data.length} />
    </div>
  );
};

export default Reference;
