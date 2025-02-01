import FilterComponent from "./FilterComponent";
import {
  characterFilterData,
  episodeFilterData,
  locationFilterData,
} from "../../Constants/data";

import Search from "./Search";
import SearchResults from "./SearchResults";

export default async function Home() {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json();

  console.log(data);

  return (
    <div className="container mx-auto mt-2 flex overflow-hidden rounded-lg border-2 border-white">
      <div className="basis-1/5 border-r-2 border-r-white">
        <FilterComponent
          filterBy="characters"
          filterData={characterFilterData}
        />
      </div>
      <div className="basis-4/5 bg-blue-600">
        <Search />
        <div className="bg-gray-800 p-4">
          <SearchResults data={data} />
        </div>
      </div>
    </div>
  );
}
