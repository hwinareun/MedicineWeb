import Input from '../common/Input';
import { GiPill, GiPillDrop } from 'react-icons/gi';
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

  const FilterOption: React.FC<FilterOptionProps> = ({
    label,
    icon: Icon,
    onClick,
    isSelected,
  }) => (
    <p
      onClick={onClick}
      className={`p-2 px-5 border-2 border-blue-400 cursor-pointer ${
        isSelected ? 'bg-blue-200' : ''
      }`}
      role="button"
      aria-label={label}
    >
      <Icon className="text-3xl" /> {label}
    </p>
  );

  const toggleSelection = (currentValue, action, setAction) => {
    if (currentValue === action) {
      dispatch(setAction(''));
    } else {
      dispatch(setAction(action));
    }
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

  const searchColorOptions = (selectedColor: string, setSelectedColor) =>
    colorOptions.map((color) => (
      <p
        key={color.name}
        onClick={() =>
          toggleSelection(selectedColor, color.name, setSelectedColor)
        }
        className={`p-2 border-2 border-blue-400 cursor-pointer ${
          selectedColor === color.name ? 'bg-blue-200' : ''
        }`}
      >
        <TbSquareRoundedFilled className={`text-3xl text-${color.color}`} />
        {color.name}
      </p>
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
          {/* 추후 식별 이미지로 바꾸기 */}
          <img
            src={Logo4}
            alt="drugIdentification"
            className="w-40 border-2 border-blue-400"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-1 p-2">
          제형
          <div className="flex flex-row gap-1">
            <FilterOption
              label="정제"
              icon={CiTablets1}
              onClick={() =>
                toggleSelection(selectedForm, '정제', setSelectedForm)
              }
              isSelected={selectedForm === '정제'}
            />
            <FilterOption
              label="경질캡슐"
              icon={GiPill}
              onClick={() =>
                toggleSelection(selectedForm, '경질캡슐', setSelectedForm)
              }
              isSelected={selectedForm === '경질캡슐'}
            />
            <FilterOption
              label="연질캡슐"
              icon={GiPillDrop}
              onClick={() =>
                toggleSelection(selectedForm, '연질캡슐', setSelectedForm)
              }
              isSelected={selectedForm === '연질캡슐'}
            />
            <FilterOption
              label="기타"
              icon={GiPill}
              onClick={() =>
                toggleSelection(selectedForm, '기타', setSelectedForm)
              }
              isSelected={selectedForm === '기타'}
            />
            <FilterOption
              label="전체"
              icon={CiTablets1}
              onClick={() =>
                toggleSelection(selectedForm, '전체', setSelectedForm)
              }
              isSelected={selectedForm === '전체'}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 p-2">
          분할선
          <div className="flex flex-row gap-1">
            <FilterOption
              label="없음"
              icon={FiCircle}
              onClick={() =>
                toggleSelection(selectedLine, '없음', setSelectedLine)
              }
              isSelected={selectedLine === '없음'}
            />
            <FilterOption
              label="플러스형"
              icon={FiPlusCircle}
              onClick={() =>
                toggleSelection(selectedLine, '플러스', setSelectedLine)
              }
              isSelected={selectedLine === '플러스'}
            />
            <FilterOption
              label="마이너스형"
              icon={FiMinusCircle}
              onClick={() =>
                toggleSelection(selectedLine, '마이너스', setSelectedLine)
              }
              isSelected={selectedLine === '마이너스'}
            />
            <FilterOption
              label="기타"
              icon={FiCircle}
              onClick={() =>
                toggleSelection(selectedLine, '기타', setSelectedLine)
              }
              isSelected={selectedLine === '기타'}
            />
            <FilterOption
              label="전체"
              icon={FiCircle}
              onClick={() =>
                toggleSelection(selectedLine, '전체', setSelectedLine)
              }
              isSelected={selectedLine === '전체'}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-2">
        <p>모양</p>
        <div className="flex flex-row gap-1">
          <FilterOption
            label="원형"
            icon={TbCircle}
            onClick={() =>
              toggleSelection(selectedShape, '원형', setSelectedShape)
            }
            isSelected={selectedShape === '원형'}
          />
          <FilterOption
            label="타원형"
            icon={TbOvalVertical}
            onClick={() =>
              toggleSelection(selectedShape, '타원형', setSelectedShape)
            }
            isSelected={selectedShape === '타원형'}
          />
          <FilterOption
            label="장방형"
            icon={TbRectangle}
            onClick={() =>
              toggleSelection(selectedShape, '장방형', setSelectedShape)
            }
            isSelected={selectedShape === '장방형'}
          />
          <FilterOption
            label="반원형"
            icon={TbRectangleRoundedTop}
            onClick={() =>
              toggleSelection(selectedShape, '반원형', setSelectedShape)
            }
            isSelected={selectedShape === '반원형'}
          />
          <FilterOption
            label="삼각형"
            icon={TbTriangle}
            onClick={() =>
              toggleSelection(selectedShape, '삼각형', setSelectedShape)
            }
            isSelected={selectedShape === '삼각형'}
          />
          <FilterOption
            label="사각형"
            icon={TbSquare}
            onClick={() =>
              toggleSelection(selectedShape, '사각형', setSelectedShape)
            }
            isSelected={selectedShape === '사각형'}
          />
          <FilterOption
            label="마름모형"
            icon={TbDiamonds}
            onClick={() =>
              toggleSelection(selectedShape, '마름모형', setSelectedShape)
            }
            isSelected={selectedShape === '마름모형'}
          />
          <FilterOption
            label="오각형"
            icon={TbPentagon}
            onClick={() =>
              toggleSelection(selectedShape, '오각형', setSelectedShape)
            }
            isSelected={selectedShape === '오각형'}
          />
          <FilterOption
            label="육각형"
            icon={TbHexagon}
            onClick={() =>
              toggleSelection(selectedShape, '육각형', setSelectedShape)
            }
            isSelected={selectedShape === '육각형'}
          />
          <FilterOption
            label="팔각형"
            icon={TbOctagon}
            onClick={() =>
              toggleSelection(selectedShape, '팔각형', setSelectedShape)
            }
            isSelected={selectedShape === '팔각형'}
          />
          <FilterOption
            label="기타"
            icon={TbSquare}
            onClick={() =>
              toggleSelection(selectedShape, '기타', setSelectedShape)
            }
            isSelected={selectedShape === '기타'}
          />
          <FilterOption
            label="전체"
            icon={TbSquare}
            onClick={() =>
              toggleSelection(selectedShape, '전체', setSelectedShape)
            }
            isSelected={selectedShape === '전체'}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 p-2">
        색상
        <div className="flex flex-row gap-1">
          {searchColorOptions(selectedColor, setSelectedColor)}
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
