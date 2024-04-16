import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./PaginationBase";

export function PaginationList() {
  return (
    <Pagination className="absolute top-2.5">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="border-1 rounded-full h-10 w-10 bg-blue-oscuro hover:bg-blue-hover"
          />
        </PaginationItem>
        <div className="flex mx-3">
          <PaginationItem>
            <PaginationLink className="border-1 rounded-full h-10 w-10 bg-white hover:bg-blue-hover hover:text-white text-slate-600" href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="border-1 rounded-full h-10 w-10 hover:bg-blue-hover text-white" href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="border-1 rounded-full h-10 w-10 bg-white hover:bg-blue-hover text-slate-600 hover:text-white" href="#">3</PaginationLink>
          </PaginationItem>
        </div>
        <PaginationItem>
          <PaginationNext
            className="border-1 rounded-full h-10 w-10 bg-blue-oscuro hover:bg-blue-hover"
            href="#"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
