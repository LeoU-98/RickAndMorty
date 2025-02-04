"use client";

import { useState } from "react";
import Card from "./Card";
import { useSearch } from "./Context/searchContext";

function SearchResults() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading, error, category } = useSearch();

  if (isLoading) return <div>Loading ....</div>;
  if (error) return <div>error ....</div>;

  // Calculate paginated data
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.results?.slice(indexOfFirstItem, indexOfLastItem);

  let totalPages = 0;
  if (data?.results?.length) {
    totalPages = Math.ceil(data?.results?.length / itemsPerPage);
  }

  return (
    <div className="flex flex-col gap-4 p-5">
      <ul className="grid min-h-[572px] grid-cols-2 gap-4">
        {currentItems?.map((item) => (
          <Card data={item} type={category} key={item.id} />
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`rounded px-4 py-2 ${
            currentPage === 1
              ? "cursor-not-allowed bg-gray-600"
              : "bg-black text-white hover:bg-white hover:text-black"
          }`}
        >
          Previous
        </button>

        <span className="rounded bg-black px-4 py-2">Page {currentPage}</span>

        <button
          onClick={() =>
            setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
          }
          disabled={currentPage >= totalPages}
          className={`rounded px-4 py-2 ${
            currentPage >= totalPages
              ? "cursor-not-allowed bg-gray-600"
              : "bg-black text-white hover:bg-white hover:text-black"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SearchResults;
