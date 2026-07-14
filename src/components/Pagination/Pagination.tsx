type Props = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  page,
  pageCount,
  onPageChange,
}: Props) {
  if (pageCount <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-10">

      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Previous
      </button>

      {Array.from({ length: pageCount }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`px-4 py-2 rounded border transition
            ${
              page === i + 1
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === pageCount}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
}