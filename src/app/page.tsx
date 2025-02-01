import FilterComponent from "./FilterComponent";
import {
  characterFilterData,
  episodeFilterData,
  locationFilterData,
} from "./Constants/data";

import Card from "./Card";

export default function Home() {
  return (
    <div className="container mx-auto mt-2 flex bg-green-600">
      <div className="basis-1/5 bg-red-500">
        <FilterComponent
          filterBy="characters"
          filterData={characterFilterData}
        />
      </div>
      <div className="basis-4/5 bg-blue-600">
        <Search />
        <div className="bg-green-500 p-4">
          <ul className="grid grid-cols-2 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="flex items-center justify-center gap-16 bg-violet-500 py-3">
      <input type="text" className="block w-80 rounded-xl px-4 py-2" />
      <div className="flex gap-5">
        <label className="flex items-center gap-1">
          <input type="checkbox" />
          Characters
        </label>
        <label className="flex items-center gap-1">
          <input type="checkbox" />
          Characters
        </label>
        <label className="flex items-center gap-1">
          <input type="checkbox" />
          Characters
        </label>
      </div>
    </div>
  );
}
