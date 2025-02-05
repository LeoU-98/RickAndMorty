"use client";

import { TbArrowWaveRightUp } from "react-icons/tb";
import { useSearch } from "./Context/searchContext";

function Search() {
  const {
    searchText,
    setSearchText,
    resultsFound,
    setCurrentPageNumber,
    category,
    LastPageNumber,
    currentPageNumber,
    data,
  } = useSearch();

  function handleOnSearchText(e) {
    setCurrentPageNumber(1);
    setSearchText(e.target.value);
  }

  return (
    <div className="flex items-center justify-between border-b-2 border-b-white px-20 py-3">
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => handleOnSearchText(e)}
        className="block w-80 rounded-xl px-4 py-2 text-gray-900 outline-none"
      />
      {resultsFound ? (
        <div className="flex items-center gap-2">
          <p className="flex gap-2 capitalize">
            <span>
              Found {resultsFound} {category}
              {resultsFound > 1 ? "s" : ""}
            </span>
          </p>
          <TbArrowWaveRightUp className="size-8" />
          <p className="flex gap-2">
            {LastPageNumber || 1 > 1 ? (
              <span>
                {LastPageNumber} Page{LastPageNumber! > 1 ? "s" : null}
              </span>
            ) : null}
          </p>
          <TbArrowWaveRightUp className="size-8" />
          <p className="flex gap-1">
            Page
            {currentPageNumber || 1 >= 1 ? (
              <span className="capitalize">
                {currentPageNumber} : {data?.results?.length} {category}
                {resultsFound || 0 > 1 ? "s" : ""}
              </span>
            ) : null}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default Search;
