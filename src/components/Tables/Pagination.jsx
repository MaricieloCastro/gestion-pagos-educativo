import React from "react";
import PaginationList from "../PaginationList";

const Pagination = (props) => {
  const { table } = props;

  return (
    <div className="flex justify-center items-center py-4">
      <PaginationList
        goLastPage={() => table.setPageIndex(table.getPageCount() - 1)}
        goFirstPage={() => table.setPageIndex(0)}
        goNextPage={() =>
          table.setPageIndex(table.getState().pagination.pageIndex + 1)
        }
        goPrevPage={() =>
          table.setPageIndex(table.getState().pagination.pageIndex - 1)
        }
        currentPage={table.getState().pagination.pageIndex + 1}
        prevPage={table.getState().pagination.pageIndex}
        nextPage={table.getState().pagination.pageIndex + 2}
      />
    </div>
  );
};

export default Pagination;
