import FilterComponent from "./FilterComponent";
import {
  characterFilterData,
  episodeFilterData,
  locationFilterData,
} from "../../Constants/data";

import Card from "./Card";
import Search from "./Search";

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
          <ul className="grid grid-cols-2 gap-4">
            {data.results.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
