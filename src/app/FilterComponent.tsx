"use client";
import { filterData } from "../../Constants/data";
import { useSearch } from "./Context/searchContext";

function FilterComponent() {
  const { category, selectedFilters, handleRadioChange, clearFilters } =
    useSearch();

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-4 text-xl font-bold capitalize">{category} Filters</h1>

      {filterData[category]?.map((filter) => (
        <div key={filter.name} className="mb-4">
          <h2 className="mb-2 font-semibold capitalize">{filter.name}</h2>
          <div className="space-y-2">
            {filter.options?.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={filter.name}
                  value={option}
                  checked={selectedFilters[filter.name] === option}
                  onChange={() => handleRadioChange(filter.name, option)}
                  className="h-4 w-4"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-4">
        <button
          onClick={clearFilters}
          className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default FilterComponent;
