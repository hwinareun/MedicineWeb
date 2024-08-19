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
import { useState } from 'react';

const SearchFilter = () => {
  const [searchIdentification1, setSearchIdentification1] = useState('');
  const [searchIdentification2, setSearchIdentification2] = useState('');

  return (
    <div className="items-center justify-center p-10 m-5 text-sm whitespace-nowrap bg-sky-100">
      <div className="flex items-center justify-between gap-10 py-2">
        <div className="flex flex-col w-full gap-1">
          식별문자
          <Input
            value={searchIdentification1}
            placeholder={'문자1'}
            onChange={(e) => setSearchIdentification1(e.target.value)}
          />
          <Input
            value={searchIdentification2}
            placeholder={'문자2'}
            onChange={(e) => setSearchIdentification2(e.target.value)}
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
            <p className="p-2 px-5 border-2 border-blue-400">
              <CiTablets1 className="text-3xl" /> 정제
            </p>
            <p className="p-2 border-2 border-blue-400">
              <GiPill className="mx-3 text-3xl" /> 경질캡슐
            </p>
            <p className="p-2 border-2 border-blue-400">
              <GiPillDrop className="mx-3 text-3xl" /> 연질캡슐
            </p>
            <p className="p-2 py-4 text-xl border-2 border-blue-400">기타</p>
            <p className="p-2 py-4 text-xl border-2 border-blue-400">전체</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-2">
          분할선
          <div className="flex flex-row gap-1">
            <p className="p-2 px-5 border-2 border-blue-400">
              <FiCircle className="text-3xl" /> 없음
            </p>
            <p className="p-2 px-5 border-2 border-blue-400">
              <FiPlusCircle className="text-3xl" /> (+)형
            </p>
            <p className="p-2 px-5 border-2 border-blue-400">
              <FiMinusCircle className="text-3xl" /> (-)형
            </p>
            <p className="p-2 py-4 text-xl border-2 border-blue-400">기타</p>
            <p className="p-2 py-4 text-xl border-2 border-blue-400">전체</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-2">
        <p>모양</p>
        <div className="flex flex-row gap-1">
          <p className="p-2 px-5 border-2 border-blue-400">
            <TbCircle className="text-3xl" /> 원형
          </p>
          <p className="p-2 px-5 border-2 border-blue-400">
            <TbOvalVertical className="ml-2 text-3xl" /> 타원형
          </p>
          <p className="p-2 px-5 border-2 border-blue-400">
            <TbRectangle className="ml-2 text-3xl" /> 장방형
          </p>
          <p className="p-2 px-5 border-2 border-blue-400">
            <TbRectangleRoundedTop className="ml-2 text-3xl" /> 반원형
          </p>
          <p className="p-2 px-5 border-2 border-blue-400">
            <TbTriangle className="ml-2 text-3xl" /> 삼각형
          </p>
          <p className="p-2 px-5 border-2 border-blue-400">
            <TbSquare className="ml-2 text-3xl" /> 사각형
          </p>
        </div>
        <div className="flex flex-row gap-1">
          <p className="p-2 px-4 border-2 border-blue-400">
            <TbDiamonds className="ml-3 text-3xl" /> 마름모형
          </p>
          <p className="p-2 px-5 border-2 border-blue-400">
            <TbPentagon className="ml-2 text-3xl" /> 오각형
          </p>
          <p className="p-2 px-5 border-2 border-blue-400">
            <TbHexagon className="ml-2 text-3xl" /> 육각형
          </p>
          <p className="p-2 px-5 border-2 border-blue-400">
            <TbOctagon className="ml-2 text-3xl" /> 팔각형
          </p>
          <p className="p-4 text-xl border-2 border-blue-400">기타</p>
          <p className="p-4 text-xl border-2 border-blue-400">전체</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-2">
        색상
        <div className="flex flex-row gap-1">
          <p className="p-1 px-5 border-2 border-blue-400">
            <TbSquareRoundedFilled className="text-3xl text-pink-500" /> 분홍
          </p>
          <p className="p-1 px-5 border-2 border-blue-400">
            <TbSquareRoundedFilled className="text-3xl text-red-500" /> 빨강
          </p>
          <p className="p-1 px-5 border-2 border-blue-400">
            <TbSquareRoundedFilled className="text-3xl text-orange-500" /> 주황
          </p>
          <p className="p-1 px-5 border-2 border-blue-400">
            <TbSquareRoundedFilled className="text-3xl text-yellow-500" /> 노랑
          </p>
          <p className="p-1 px-5 border-2 border-blue-400">
            <TbSquareRoundedFilled className="text-3xl text-lime-500" /> 연두
          </p>
          <p className="p-1 px-5 border-2 border-blue-400">
            <TbSquareRoundedFilled className="text-3xl text-green-500" /> 초록
          </p>
          <p className="p-1 px-5 border-2 border-blue-400">
            <TbSquareRoundedFilled className="text-3xl text-teal-500" /> 청록
          </p>
          <p className="p-1 px-5 border-2 border-blue-400">
            <TbSquareRoundedFilled className="text-3xl text-blue-500" /> 파랑
          </p>
        </div>
        <div className="flex flex-row gap-1">
          <p className="p-1 px-5 border-2 border-blue-400">
            <TbSquareRoundedFilled className="text-3xl text-blue-900" /> 남색
          </p>
          <p className="p-1 px-5 border-2 border-blue-400">
            <TbSquareRoundedFilled className="text-3xl text-fuchsia-500" /> 자주
          </p>
          <p className="p-1 px-5 border-2 border-blue-400">
            <TbSquareRoundedFilled className="text-3xl text-violet-500" /> 분홍
          </p>
          <p className="p-1 px-5 border-2 border-blue-400">
            <TbSquareRoundedFilled className="text-3xl text-gray-500" /> 회색
          </p>
          <p className="p-1 px-5 border-2 border-blue-400">
            <TbSquareRoundedFilled className="text-3xl text-black" /> 검정
          </p>
          <p className="p-1 px-5 border-2 border-blue-400">
            <TbSquareRoundedFilled className="text-3xl text-white" /> 하양
          </p>
          <p className="p-1 px-5 border-2 border-blue-400">
            <TbSquareRoundedFilled className="text-3xl text-red-500" /> 투명
          </p>
          <p className="p-1 px-5 border-2 border-blue-400">
            <TbSquareRoundedFilled className="text-3xl text-red-500" /> 전체
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button searchItem={searchIdentification1 || searchIdentification2}>
          확인
        </Button>
        <Button searchItem={''}>초기화</Button>
      </div>
    </div>
  );
};

export default SearchFilter;
