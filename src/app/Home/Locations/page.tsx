"use client";

import { filterData } from "../../../../Constants/data";
import FilterFilter from "../../FilterFilter";
import Search from "../../Search";
import SearchResults from "../../SearchResults";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../layout";

export default function CharactersPage() {
  const queryText = "rick";
  const queryPage = "location";

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchData", queryText, queryPage], // query key
    queryFn: () => fetchData(queryText, queryPage), // query function
  });

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto mt-2 flex h-[740px] overflow-hidden rounded-lg border-2 border-white bg-black/70">
      <div className="basis-1/5 border-r-2 border-r-white">
        <FilterFilter filters={filterData} category="characters" />
      </div>
      <div className="basis-4/5">
        <Search />
        <SearchResults data={data} />
      </div>
    </div>
  );
}
