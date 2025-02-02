import { filterData } from "../../../Constants/data";
import FilterFilter from "../FilterFilter";
import Search from "../Search";
import SearchResults from "../SearchResults";

export default async function CharactersPage() {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json();

  console.log(data);

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
