import Logo3 from '../../assets/images/Logo3.png';

const ReferenceEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center m-4 text-center bg-medicineNeutral whitespace-nowrap">
      <img src={Logo3} className="w-auto" />
      <p className="px-10 text-2xl font-thin text-medicinePoint">
        해당하는 검색 결과가 없습니다. <br />
        다른 검색어를 입력해주시거나 식별 검색을 이용해 주세요.
      </p>
    </div>
  );
};

export default ReferenceEmpty;
