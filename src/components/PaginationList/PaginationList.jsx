import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from './PaginationBase';

function PaginationList(props) {
  const {
    goLastPage,
    goFirstPage,
    currentPage,
    prevPage,
    nextPage,
    goNextPage,
    goPrevPage,
    lastPage
  } = props;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={goFirstPage}
            className='border-1 rounded-full h-10 w-10 bg-blue-oscuro hover:bg-blue-hover cursor-pointer'
          />
        </PaginationItem>
        <div className='flex mx-3'>
          <PaginationItem>
            <PaginationLink
              className='border-1 rounded-full h-10 w-10 bg-white hover:bg-blue-hover hover:text-white text-slate-600 cursor-pointer'
              onClick={goPrevPage}
            >
              {prevPage == null ? <FontAwesomeIcon icon={faBan} /> : prevPage}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className='border-1 rounded-full h-10 w-10 hover:bg-blue-hover text-white cursor-pointer'
              isActive
            >
              {currentPage}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className='border-1 rounded-full h-10 w-10 bg-white hover:bg-blue-hover text-slate-600 hover:text-white cursor-pointer'
              onClick={currentPage == lastPage ? goLastPage : goNextPage}
            >
              {currentPage == lastPage ? (
                <FontAwesomeIcon icon={faBan} />
              ) : (
                nextPage
              )}
            </PaginationLink>
          </PaginationItem>
        </div>
        <PaginationItem>
          <PaginationNext
            className='border-1 rounded-full h-10 w-10 bg-blue-oscuro hover:bg-blue-hover cursor-pointer'
            onClick={goLastPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationList;

PaginationList.propTypes = {
  goLastPage: PropTypes.func,
  goFirstPage: PropTypes.func,
  currentPage: PropTypes.number,
  prevPage: PropTypes.number,
  nextPage: PropTypes.number,
  goNextPage: PropTypes.func,
  goPrevPage: PropTypes.func,
  lastPage: PropTypes.number
};
