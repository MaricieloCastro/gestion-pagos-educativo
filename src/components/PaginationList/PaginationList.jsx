import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./PaginationBase";

function PaginationList(props) {
  const {
    goLastPage,
    goFirstPage,
    currentPage,
    prevPage,
    nextPage,
    goNextPage,
    goPrevPage,
  } = props;

  return (
    <Pagination className="absolute top-2.5">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={goFirstPage}
            className="border-1 rounded-full h-10 w-10 bg-blue-oscuro hover:bg-blue-hover cursor-pointer"
            disabled
          />
        </PaginationItem>
        <div className="flex mx-3">
          <PaginationItem>
            <PaginationLink
              className="border-1 rounded-full h-10 w-10 bg-white hover:bg-blue-hover hover:text-white text-slate-600 cursor-pointer"
              onClick={goPrevPage}
            >
              {prevPage == 0 ? <FontAwesomeIcon icon={faBan} /> : prevPage}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="border-1 rounded-full h-10 w-10 hover:bg-blue-hover text-white cursor-pointer"
              isActive
            >
              {currentPage}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="border-1 rounded-full h-10 w-10 bg-white hover:bg-blue-hover text-slate-600 hover:text-white cursor-pointer"
              onClick={goNextPage}
            >
              {nextPage}
            </PaginationLink>
          </PaginationItem>
        </div>
        <PaginationItem>
          <PaginationNext
            className="border-1 rounded-full h-10 w-10 bg-blue-oscuro hover:bg-blue-hover cursor-pointer"
            onClick={goLastPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationList;
