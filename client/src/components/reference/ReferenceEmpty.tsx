import Logo4 from '../../assets/images/Logo4.png';

const ReferenceEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center py-48 text-xs rounded-lg pb-52 bg-medicineNeutral whitespace-nowrap">
      <img src={Logo4} className="w-72" />
      <p className="px-10 text-lg font-thin text-medicinePoint">
        해당하는 검색 결과가 없습니다. <br />
        다른 검색어를 입력해주시거나 식별 검색을 이용해 주세요.
      </p>
    </div>
  );
};

export default ReferenceEmpty;
