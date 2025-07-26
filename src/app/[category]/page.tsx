"use client";

import { SearchProvider } from "@/app/Context/searchContext";
import Search from "../_UI/Search";

import PageContent from "@/app/PageContent";
import FilterComponent from "@/app/_UI/FilterComponent";
import FilterComponentWithDropdowns from "@/app/_UI/FilterComponentDropdown";

export default function Page() {
  return (
    <SearchProvider>
      <div className="mx-auto mt-5 flex min-h-[45rem] flex-col overflow-clip rounded-lg border-2 border-white bg-black/70 lg:container lg:flex-row">
        <div className="hidden basis-1/6 border-r-2 border-r-white bg-gradient-to-br from-slate-800/80 to-slate-600/80 xl:block">
          <FilterComponent />
        </div>
        <div className="flex flex-1 basis-full flex-col xl:basis-5/6">
          <Search />
          <div className="xl:hidden">
            <FilterComponentWithDropdowns />
          </div>
          <PageContent />
        </div>
      </div>
    </SearchProvider>
  );
}
