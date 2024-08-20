import Input from '../common/Input';
import { GiMedicinePills, GiPill, GiPillDrop } from 'react-icons/gi';
import {
  TbCircle,
  TbDiamonds,
  TbHexagon,
  TbOctagon,
  TbOvalVertical,
  TbPentagon,
  TbRectangle,
  TbRectangleRoundedTop,
  TbSquare,
  TbSquareRoundedFilled,
  TbTriangle,
} from 'react-icons/tb';
import { FiCircle, FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { CiTablets1 } from 'react-icons/ci';
import Logo4 from '../../assets/images/Logo4.png';
import Button from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  resetFilters,
  setSearchIdentification1,
  setSearchIdentification2,
  setSelectedColor,
  setSelectedForm,
  setSelectedLine,
  setSelectedShape,
} from '../../store/slices/filterSlice';

interface FilterOptionProps {
  label: string;
  icon: React.ElementType;
  onClick: () => void;
  isSelected: boolean;
}

const FilterOption: React.FC<FilterOptionProps> = ({
  label,
  icon: Icon,
  onClick,
  isSelected,
}) => (
  <div
    onClick={onClick}
    className={`p-2 px-5 border-2 border-blue-400 cursor-pointer ${
      isSelected ? 'bg-blue-200' : ''
    }`}
    role="button"
    aria-label={label}
  >
    <Icon className="text-3xl" /> {label}
  </div>
);

const SearchFilter = () => {
  const dispatch = useDispatch();
  const {
    searchIdentification1,
    searchIdentification2,
    selectedForm,
    selectedLine,
    selectedShape,
    selectedColor,
  } = useSelector((state: RootState) => state.filter);
  const { searchItem, selectedDrug } = useSelector(
    (state: RootState) => state.search
  );

  const toggleSelection = (currentValue, action, setAction) => {
    if (currentValue === action) {
      dispatch(setAction(''));
    } else {
      dispatch(setAction(action));
    }
  };

  const selectedFormOptions = () => {
    const formOptions = [
      { label: '정제', icon: CiTablets1, value: '정제' },
      { label: '경질캡슐', icon: GiPill, value: '경질캡슐' },
      { label: '연질캡슐', icon: GiPillDrop, value: '연질캡슐' },
      { label: '기타', icon: GiMedicinePills, value: '기타' },
      { label: '전체', icon: GiMedicinePills, value: '전체' },
    ];

    return formOptions.map((item) => (
      <FilterOption
        key={item.value}
        label={item.label}
        icon={item.icon}
        onClick={() =>
          toggleSelection(selectedForm, item.value, setSelectedForm)
        }
        isSelected={selectedForm === item.value}
      />
    ));
  };

  const selectedLineOptions = () => {
    const lineOptions = [
      { label: '없음', icon: FiCircle, value: '없음' },
      { label: '(+)형', icon: FiPlusCircle, value: '(+)형' },
      { label: '(-)형', icon: FiMinusCircle, value: '(-)형' },
      { label: '기타', icon: TbCircle, value: '기타' },
      { label: '전체', icon: TbCircle, value: '전체' },
    ];

    return lineOptions.map((item) => (
      <FilterOption
        key={item.value}
        label={item.label}
        icon={item.icon}
        onClick={() =>
          toggleSelection(selectedLine, item.value, setSelectedLine)
        }
        isSelected={selectedLine === item.value}
      />
    ));
  };

  const selectedShapeOptions = () => {
    const shapeOptions = [
      { label: '원형', icon: TbCircle, value: '원형' },
      { label: '타원형', icon: TbOvalVertical, value: '타원형' },
      { label: '장방형', icon: TbRectangle, value: '장방형' },
      { label: '반원형', icon: TbRectangleRoundedTop, value: '반원형' },
      { label: '삼각형', icon: TbTriangle, value: '삼각형' },
      { label: '사각형', icon: TbSquare, value: '사각형' },
      { label: '마름모형', icon: TbDiamonds, value: '마름모형' },
      { label: '오각형', icon: TbPentagon, value: '오각형' },
      { label: '육각형', icon: TbHexagon, value: '육각형' },
      { label: '팔각형', icon: TbOctagon, value: '팔각형' },
      { label: '기타', icon: TbCircle, value: '기타' },
      { label: '전체', icon: TbCircle, value: '전체' },
    ];

    return shapeOptions.map((item) => (
      <FilterOption
        key={item.value}
        label={item.label}
        icon={item.icon}
        onClick={() =>
          toggleSelection(selectedShape, item.value, setSelectedShape)
        }
        isSelected={selectedShape === item.value}
      />
    ));
  };

  const filters = {
    searchIdentification1,
    searchIdentification2,
    selectedForm,
    selectedLine,
    selectedShape,
    selectedColor,
  };

  const applyFilters = () => {
    console.log(`${selectedDrug}: ${searchItem}`);
    console.log(filters);
  };

  const handleResetClick = () => {
    dispatch(resetFilters());
  };

  const colorOptions = [
    { color: 'pink-500', name: '분홍' },
    { color: 'red-500', name: '빨강' },
    { color: 'orange-500', name: '주황' },
    { color: 'yellow-500', name: '노랑' },
    { color: 'lime-500', name: '연두' },
    { color: 'green-500', name: '초록' },
    { color: 'teal-500', name: '청록' },
    { color: 'blue-500', name: '파랑' },
    { color: 'blue-900', name: '남색' },
    { color: 'fuchsia-500', name: '자주' },
    { color: 'violet-500', name: '보라' },
    { color: 'gray-500', name: '회색' },
    { color: 'black', name: '검정' },
    { color: 'white', name: '하양' },
    { color: 'white', name: '투명' },
    { color: 'white', name: '전체' },
  ];
  
  const getColorClass = (colorName) => {
    const colorMap = {
      분홍: 'text-pink-500',
      빨강: 'text-red-500',
      주황: 'text-orange-500',
      노랑: 'text-yellow-500',
      연두: 'text-lime-500',
      초록: 'text-green-500',
      청록: 'text-teal-500',
      파랑: 'text-blue-500',
      남색: 'text-blue-900',
      자주: 'text-fuchsia-500',
      보라: 'text-violet-500',
      회색: 'text-gray-500',
      검정: 'text-black',
      하양: 'text-white',
      투명: 'text-gray-300',
      전체: 'text-gray-300',
    };
    return colorMap[colorName];
  };

  const selectedColorOptions = () =>
    colorOptions.map((item) => (
      <div
        key={item.name}
        onClick={() =>
          toggleSelection(selectedColor, item.name, setSelectedColor)
        }
        className={`p-2 border-2 border-blue-400 cursor-pointer ${
          selectedColor === item.name ? 'bg-blue-200' : ''
        }`}
      >
        <TbSquareRoundedFilled
          className={`text-3xl ${getColorClass(item.name)}`}
        />
        {item.name}
      </div>
    ));

  return (
    <div className="items-center justify-center p-10 m-5 text-sm whitespace-nowrap bg-sky-100">
      <div className="flex items-center justify-between gap-10 py-2">
        <div className="flex flex-col w-full gap-1">
          식별문자
          <Input
            value={searchIdentification1}
            placeholder={'문자1'}
            onChange={(e) => dispatch(setSearchIdentification1(e.target.value))}
          />
          <Input
            value={searchIdentification2}
            placeholder={'문자2'}
            onChange={(e) => dispatch(setSearchIdentification2(e.target.value))}
          />
        </div>
        <div>
          <img
            src={Logo4}
            alt="drugIdentification"
            className="w-40 border-2 border-blue-400"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 p-2">
        <p>제형</p>
        <div className="flex flex-row gap-1">{selectedFormOptions()}</div>
      </div>
      <div className="flex flex-col gap-1 p-2">
        <p>분할선</p>
        <div className="flex flex-row gap-1">{selectedLineOptions()}</div>
      </div>
      <div className="flex flex-col gap-1 p-2">
        <p>모양</p>
        <div className="flex flex-row gap-1">
          {selectedShapeOptions().slice(0, 6)}
        </div>
        <div className="flex flex-row gap-1">
          {selectedShapeOptions().slice(6)}
        </div>
      </div>
      <div className="flex flex-col gap-1 p-2">
        색상
        <div className="flex flex-row gap-1">
          {selectedColorOptions().slice(0, 8)}
        </div>
        <div className="flex flex-row gap-1">
          {selectedColorOptions().slice(8)}
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button onClick={applyFilters}>확인</Button>
        <Button onClick={handleResetClick}>초기화</Button>
      </div>
    </div>
  );
};

export default SearchFilter;
