type FilterComponentProps = {
  filterData: {
    name: string;
    options?: string[];
  }[];

  filterBy: "characters" | "locations" | "episodes";
};

function FilterComponent({ filterData, filterBy }: FilterComponentProps) {
  return (
    <div className="h-full bg-black py-4 pl-4">
      <p>Filter By : {filterBy}</p>
      <ul className="mt-2 flex flex-col gap-2 pl-4">
        {filterData.map((property, index) => (
          <li key={index}>
            <label className="flex items-center gap-2 capitalize">
              <input type="checkbox" />
              {property.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterComponent;
