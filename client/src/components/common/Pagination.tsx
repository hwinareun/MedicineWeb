import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { setCurrentPage } from '../../store/slices/drugSlice';
import {
  TbSquareChevronLeftFilled,
  TbSquareChevronRightFilled,
  TbSquareChevronsLeftFilled,
  TbSquareChevronsRightFilled,
} from 'react-icons/tb';

const Pagination = ({ totalItems }: { totalItems: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const currentPage = useSelector((state: RootState) => state.drug.currentPage);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [dispatch]);

  const goToFirstPage = () => {
    dispatch(setCurrentPage(1));
  };

  const goToLastPage = () => {
    dispatch(setCurrentPage(totalPages));
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 p-4 m-4 text-5xl text-medicinePositive">
      <div className="flex">
        <TbSquareChevronsLeftFilled
          onClick={goToFirstPage}
          className="cursor-pointer hover:text-medicineFontBlue"
        />
        <TbSquareChevronLeftFilled
          onClick={goToPreviousPage}
          className="cursor-pointer hover:text-medicineFontBlue"
        />
      </div>
      <p className="text-sm font-bold text-medicineFontBlue">
        - {currentPage} 페이지 -
      </p>
      <div className="flex">
        <TbSquareChevronRightFilled
          onClick={goToNextPage}
          className="cursor-pointer hover:text-medicineFontBlue"
        />
        <TbSquareChevronsRightFilled
          onClick={goToLastPage}
          className="cursor-pointer hover:text-medicineFontBlue"
        />
      </div>
    </div>
  );
};

export default Pagination;
