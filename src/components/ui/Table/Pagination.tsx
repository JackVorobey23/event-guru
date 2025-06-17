interface PaginationProps {
  setPage: (i: number) => void;
  pageAmount: number;
  itemsPerPage: number;
  activePage: number;
}

export default function Pagination({
  pageAmount,
  activePage,
  setPage,
}: PaginationProps) {
  return (
    <div className="">
      <div className="flex gap-4 justify-center items-center p-4">
        Page
        {new Array(pageAmount).fill(1).map((_, i) => (
          <button
            key={`page-${i}`}
            className={`p-4 bg-[#e1ffda] rounded-md leading-3 transition-all ${
              i + 1 == activePage ? "bg-[#99fcbf]" : "hover:bg-[#c0ffb1] "
            }`}
            onClick={() => {
              setPage(i);
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
