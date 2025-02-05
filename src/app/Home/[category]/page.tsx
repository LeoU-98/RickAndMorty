"use client";

import { SearchProvider } from "@/app/Context/searchContext";
import Search from "../../Search";
import SearchResults from "../../SearchResults";
import FilterComponent from "@/app/FilterComponent";

export default function Page() {
  return (
    <SearchProvider>
      <div className="container mx-auto mt-5 flex h-[740px] overflow-hidden rounded-lg border-2 border-white bg-black/70">
        <div className="basis-1/6 border-r-2 border-r-white">
          <FilterComponent />
        </div>
        <div className="basis-5/6">
          <Search />
          <SearchResults />
        </div>
      </div>
    </SearchProvider>
  );
}
