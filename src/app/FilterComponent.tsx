"use client";
import { filterData } from "../../Constants/data";
import { useSearch } from "./Context/searchContext";
import { motion } from "motion/react";

const filterButtonVariants = {
  normal: {
    scale: 1,
  },
  hovered: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

function FilterComponent() {
  const { category, selectedFilters, handleRadioChange, clearFilters } =
    useSearch();

  return (
    <div className="mx-auto h-full max-w-md bg-gradient-to-br from-slate-800/80 to-slate-600/80 p-6">
      <h2 className="mb-4 text-xl font-bold capitalize">{category} Filters</h2>

      {filterData[category]?.map((filter) => (
        <div key={filter.name} className="mb-4">
          <h2 className="mb-2 font-semibold capitalize">{filter.name}</h2>
          <div className="space-y-2">
            {filter.options?.map((option) => (
              <label
                key={option}
                className="flex w-fit cursor-pointer select-none items-center space-x-2"
              >
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

      <div className="mt-5">
        <motion.button
          variants={filterButtonVariants}
          initial="normal"
          whileHover="hovered"
          onClick={clearFilters}
          className="rounded-md bg-black px-4 py-2 text-white hover:bg-white hover:text-black"
        >
          Clear Filters
        </motion.button>
      </div>
    </div>
  );
}

export default FilterComponent;
