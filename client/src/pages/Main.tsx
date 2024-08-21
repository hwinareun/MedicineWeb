import Logo1 from '../assets/images/Logo1.png';
import SearchBox from '../components/search/SearchBox';

const Main = () => {
  return (
    <div className="bg-blue-100 whitespace-nowrap">
      {/* 로고 & 검색어 박스 */}
      <div className="w-1/2 p-2 m-2">
        <img src={Logo1} alt="medicineWebLogo" className="" />
        <div className="">
          <SearchBox />
        </div>
      </div>
      {/* 로그인 기능 구현 후 적용 */}
    </div>
  );
};

export default Main;
