"use client"; // Ensures this runs on the client side

import { useState } from "react";
import { PageData } from "./allTypes";
import Card from "./Card";

interface SearchResultsProps {
  data: PageData;
}

const SearchResults: React.FC<SearchResultsProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  // Calculate paginated data
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.results?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data?.results?.length / itemsPerPage);

  return (
    <>
      <ul className="grid grid-cols-2 gap-4">
        {currentItems?.map((item) => <Card data={item} key={item.id} />)}
      </ul>

      {/* Pagination Controls */}
      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`rounded px-4 py-2 ${
            currentPage === 1
              ? "cursor-not-allowed bg-gray-400"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>

        <span className="rounded bg-gray-300 px-4 py-2">
          Page {currentPage}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
          }
          disabled={currentPage >= totalPages}
          className={`rounded px-4 py-2 ${
            currentPage >= totalPages
              ? "cursor-not-allowed bg-gray-400"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default SearchResults;
