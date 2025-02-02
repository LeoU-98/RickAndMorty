"use client";

import Link from "next/link";
import { useState } from "react";

function Search() {
  const [searchText, setSearchText] = useState();

  return (
    <div className="flex items-center justify-center gap-24 border-b-2 border-b-white py-3">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="block w-80 rounded-xl px-4 py-2 text-gray-900 outline-none"
      />
      <Link
        href={"characters/lol"}
        className="rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-white hover:text-black"
      >
        Search
      </Link>
      <div className="flex gap-5">Results Found</div>
    </div>
  );
}

export default Search;
