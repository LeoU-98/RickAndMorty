import { filterData } from "../../../Constants/data";
// import { filterData, locationFilterData } from "../../../Constants/data";
// import FilterComponent from "../FilterComponent";
import FilterFilter from "../FilterFilter";
import Search from "../Search";
import SearchResults from "../SearchResults";

export default async function LocationsPage() {
  const res = await fetch("https://rickandmortyapi.com/api/location/");
  const data = await res.json();

  console.log(data);

  return (
    <div className="container mx-auto mt-2 flex h-[740px] overflow-hidden rounded-lg border-2 border-white bg-black/70">
      <div className="basis-1/5 border-r-2 border-r-white">
        {/* <FilterComponent filterBy="location" filterData={locationFilterData} /> */}
        <FilterFilter filters={filterData} category="locations" />
        {/* <FilterComponent filterBy="location" filterData={locationFilterData} /> */}
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
