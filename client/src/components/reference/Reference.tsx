import Logo3 from '../../assets/images/Logo3.png';

interface ReferenceDrugData {
  id: number;
  imgUrl?: string;
  productName: string;
  ingredients: string;
  effects: string;
}

interface ReferenceProps {
  data: ReferenceDrugData[];
}

const Reference: React.FC<ReferenceProps> = ({ data }) => {
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
            <tr key={drug.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={drug.imgUrl || Logo3}
                  alt="drugIdentification"
                  className="w-48 border-2 border-blue-400"
                />
              </td>
              <td>{drug.productName}</td>
              <td>{drug.ingredients}</td>
              <td>{drug.effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reference;
