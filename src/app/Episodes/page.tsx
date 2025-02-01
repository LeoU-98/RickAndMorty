import { filterData } from "../../../Constants/data";
import FilterFilter from "../FilterFilter";
// import FilterComponent from "../FilterComponent";
import Search from "../Search";
import SearchResults from "../SearchResults";

export default async function EpisodesPages() {
  const res = await fetch("https://rickandmortyapi.com/api/episode/");
  const data = await res.json();

  console.log(data);

  return (
    <div className="container mx-auto mt-2 flex h-[740px] overflow-hidden rounded-lg border-2 border-white bg-black/70">
      <div className="basis-1/5 border-r-2 border-r-white">
        {/* <FilterComponent filterBy="episode" filterData={episodeFilterData} /> */}
        <FilterFilter filters={filterData} category="episodes" />
      </div>
      <div className="basis-4/5">
        <Search />
        <div className="p-4">
          <SearchResults data={data} />
        </div>
      </div>
    </div>
  );
}
