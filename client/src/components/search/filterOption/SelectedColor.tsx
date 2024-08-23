import {
  TbHelpSquareRoundedFilled,
  TbSquareRounded,
  TbSquareRoundedFilled,
} from 'react-icons/tb';
import FilterOption from './FilterOption';

const SelectedColor = () => {
  return (
    <div className="flex flex-col p-2">
      <p className="pb-1 font-semibold">색상</p>
      <div className="flex flex-row justify-center min-w-full gap-1 p-1 pt-2 border-2 border-b-0 rounded-t-lg border-medicineSecondary bg-medicinePrimary">
        <FilterOption
          label="빨강"
          icon={TbSquareRoundedFilled}
          field={'selectedColor'}
          value="빨강"
          color="red"
        />
        <FilterOption
          label="주황"
          icon={TbSquareRoundedFilled}
          field={'selectedColor'}
          value="주황"
          color="orange"
        />
        <FilterOption
          label="노랑"
          icon={TbSquareRoundedFilled}
          field={'selectedColor'}
          value="노랑"
          color="yellow"
        />
        <FilterOption
          label="연두"
          icon={TbSquareRoundedFilled}
          field={'selectedColor'}
          value="연두"
          color="lime"
        />
        <FilterOption
          label="초록"
          icon={TbSquareRoundedFilled}
          field={'selectedColor'}
          value="초록"
          color="green"
        />
        <FilterOption
          label="청록"
          icon={TbSquareRoundedFilled}
          field={'selectedColor'}
          value="청록"
          color="teal"
        />
      </div>
      <div className="flex flex-row justify-center min-w-full gap-1 p-1 border-2 border-medicineSecondary bg-medicinePrimary">
        <FilterOption
          label="파랑"
          icon={TbSquareRoundedFilled}
          field={'selectedColor'}
          value="파랑"
          color="blue"
        />
        <FilterOption
          label="보라"
          icon={TbSquareRoundedFilled}
          field={'selectedColor'}
          value="보라"
          color="indigo"
        />
        <FilterOption
          label="자주"
          icon={TbSquareRoundedFilled}
          field={'selectedColor'}
          value="자주"
          color="fuchsia"
        />
        <FilterOption
          label="분홍"
          icon={TbSquareRoundedFilled}
          field="selectedColor"
          value="분홍"
          color="pink"
        />
        <FilterOption
          label="갈색"
          icon={TbSquareRoundedFilled}
          field="selectedColor"
          value="갈색"
          color="brown"
        />
      </div>
      <div className="flex flex-row justify-center min-w-full gap-1 p-1 pb-2 border-2 border-t-0 rounded-b-lg bg-medicinePrimary border-medicineSecondary">
        <FilterOption
          label="회색"
          icon={TbSquareRoundedFilled}
          field={'selectedColor'}
          value="회색"
          color="gray"
        />
        <FilterOption
          label="검정"
          icon={TbSquareRoundedFilled}
          field={'selectedColor'}
          value="검정"
          color="black"
        />
        <FilterOption
          label="하양"
          icon={TbSquareRoundedFilled}
          field={'selectedColor'}
          value="하양"
          color="white"
        />
        <FilterOption
          label="투명"
          icon={TbSquareRounded}
          field={'selectedColor'}
          value="투명"
          color="white"
        />
        <FilterOption
          label="전체"
          icon={TbHelpSquareRoundedFilled}
          field={'selectedColor'}
          value=""
          color="white"
        />
      </div>
    </div>
  );
};

export default SelectedColor;
