"use client";

import Link from "next/link";
import { useSearch } from "./Context/searchContext";

function Search() {
  const { searchText, setSearchText, applyQuery } = useSearch();

  return (
    <div className="flex items-center justify-center gap-24 border-b-2 border-b-white py-3">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="block w-80 rounded-xl px-4 py-2 text-gray-900 outline-none"
      />
      <button
        onClick={applyQuery}
        className="rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-white hover:text-black"
      >
        Search
      </button>
      <div className="flex gap-5">Results Found</div>
    </div>
  );
}

export default Search;
