import Logo3 from '../../assets/images/Logo3.png';
import { DrugReferenceData } from '../../types/drug.type';

interface ReferenceProps {
  data: DrugReferenceData[];
}

const Reference: React.FC<ReferenceProps> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <table className="bg-medicineNeutral">
        <thead>
          <tr>
            <th>No.</th>
            <th>이미지</th>
            <th>의약품명</th>
            <th>성분</th>
            <th>효능•효과</th>
          </tr>
        </thead>
        <tbody>
          {data.map((drug, index) => (
            <tr key={drug.drugid}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={drug.itemImage || Logo3}
                  alt="drugIdentification"
                  className="w-48 border-2 border-blue-400"
                />
              </td>
              <td>{drug.itemName}</td>
              <td>{drug.ingrEngName}</td>
              <td>{drug.efcyQesitm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reference;
