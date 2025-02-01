"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FilterOption {
  name: string;
  options: string[];
  value: string;
}

interface FilterCategory {
  [key: string]: FilterOption[];
}

interface FilterComponentProps {
  filters: FilterCategory;
  category: keyof FilterCategory; // "characters", "locations", or "episodes"
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  filters,
  category,
}) => {
  const router = useRouter();

  // Initialize state for selected filters
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >(
    filters[category].reduce(
      (acc, filter) => {
        acc[filter.name] = ""; // Default empty selection
        return acc;
      },
      {} as Record<string, string>,
    ),
  );

  // Handle radio button change
  const handleRadioChange = (filterName: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  // Apply filters and update query params
  const applyFilters = () => {
    const queryString = Object.entries(selectedFilters)
      .filter(([_, value]) => value) // Remove empty selections
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      )
      .join("&");

    const url = queryString
      ? `/items/${category}?${queryString}`
      : `/items/${category}`;
    router.push(url);
  };

  // **Reset filters**
  const clearFilters = () => {
    setSelectedFilters(
      filters[category].reduce(
        (acc, filter) => {
          acc[filter.name] = ""; // Reset all filters to empty
          return acc;
        },
        {} as Record<string, string>,
      ),
    );

    router.push(`/items/${category}`); // Reset URL to remove query params
  };

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-4 text-xl font-bold capitalize">{category} Filters</h1>

      {/* Dynamic Filter Radio Buttons */}
      {filters[category].map((filter) => (
        <div key={filter.name} className="mb-4">
          <h2 className="mb-2 font-semibold capitalize">{filter.name}</h2>
          <div className="space-y-2">
            {filter.options.map((option) => (
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

      {/* Buttons: Apply Filters & Clear Filters */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={applyFilters}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Apply Filters
        </button>
        <button
          onClick={clearFilters}
          className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
