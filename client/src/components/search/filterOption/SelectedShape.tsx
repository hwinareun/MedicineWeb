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
  TbTriangle,
} from 'react-icons/tb';
import FilterOption from './FilterOption';

const SelectedShape = () => {
  return (
    <div className="flex flex-col p-2">
      <p className="pb-1 font-semibold">모양</p>
      <div className="flex flex-row justify-center min-w-full gap-1 p-1 pt-2 border-2 border-b-0 rounded-t-lg border-medicineSecondary bg-medicinePrimary">
        <FilterOption
          label="원형"
          icon={TbCircle}
          field="selectedShape"
          value="원형"
        />
        <FilterOption
          label="타원형"
          icon={TbOvalVertical}
          field="selectedShape"
          value="타원형"
        />
        <FilterOption
          label="장방형"
          icon={TbRectangle}
          field="selectedShape"
          value="장방형"
        />
        <FilterOption
          label="반원형"
          icon={TbRectangleRoundedTop}
          field="selectedShape"
          value="반원형"
        />
        <FilterOption
          label="마름모형"
          icon={TbDiamonds}
          field="selectedShape"
          value="마름모형"
        />
        <FilterOption
          label="삼각형"
          icon={TbTriangle}
          field="selectedShape"
          value="삼각형"
        />
      </div>
      <div className="flex flex-row justify-center min-w-full gap-1 p-1 pb-2 pr-2 border-2 rounded-b-lg border-medicineSecondary bg-medicinePrimary">
        <FilterOption
          label="사각형"
          icon={TbSquare}
          field="selectedShape"
          value="사각형"
        />
        <FilterOption
          label="오각형"
          icon={TbPentagon}
          field="selectedShape"
          value="오각형"
        />
        <FilterOption
          label="육각형"
          icon={TbHexagon}
          field="selectedShape"
          value="육각형"
        />
        <FilterOption
          label="팔각형"
          icon={TbOctagon}
          field="selectedShape"
          value="팔각형"
        />
        <FilterOption
          label="기타"
          icon={TbCircle}
          field="selectedShape"
          value="기타"
        />
        <FilterOption
          label="전체"
          icon={TbCircle}
          field="selectedShape"
          value="전체"
        />
      </div>
    </div>
  );
};

export default SelectedShape;
