"use client";

import { SearchProvider } from "@/app/Context/searchContext";
import Search from "../../Search";
import SearchResults from "../../SearchResults";
import { useParams } from "next/navigation";
import FilterComponent from "@/app/FilterComponent";

export default function CharactersPage() {
  const { searchFor } = useParams();

  console.log(searchFor);

  return (
    <SearchProvider>
      <div className="container mx-auto mt-2 flex h-[740px] overflow-hidden rounded-lg border-2 border-white bg-black/70">
        <div className="basis-1/5 border-r-2 border-r-white">
          <FilterComponent />
        </div>
        <div className="basis-4/5">
          <Search />
          <SearchResults />
        </div>
      </div>
    </SearchProvider>
  );
}
