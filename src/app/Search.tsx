"use client";

import { useSearch } from "./Context/searchContext";

function Search() {
  const { searchText, setSearchText, resultsFound, category } = useSearch();

  return (
    <div className="flex items-center justify-between border-b-2 border-b-white px-20 py-3">
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="block w-80 rounded-xl px-4 py-2 text-gray-900 outline-none"
      />
      <p className="flex gap-2">
        Found
        <span>{resultsFound}</span>
        <span className="capitalize">
          {category}
          {resultsFound! > 1 ? "s" : ""}
        </span>
      </p>
    </div>
  );
}

export default Search;
