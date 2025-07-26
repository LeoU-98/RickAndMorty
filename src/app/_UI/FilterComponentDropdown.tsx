"use client";
import { useState } from "react";
import { filterData } from "../../../Constants/data";
import { useSearch } from "../Context/searchContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const filterButtonVariants = {
  normal: { scale: 1 },
  hovered: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
};

const dropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { type: "spring", damping: 20, stiffness: 150 },
  },
};

export default function FilterComponentWithDropdowns() {
  const { category, selectedFilters, handleRadioChange, clearFilters } =
    useSearch();
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {},
  );

  const toggleDropdown = (filterName: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  return (
    <div className="mx-auto rounded-lg bg-gradient-to-br from-slate-800/80 to-slate-600/80 p-4 shadow-md">
      <h2 className="mb-4 text-xl font-bold capitalize text-white">
        {category} Filters
      </h2>

      {filterData[category]?.map((filter) => (
        <div key={filter.name} className="mb-3">
          <button
            onClick={() => toggleDropdown(filter.name)}
            className="flex w-full items-center justify-between rounded-md bg-slate-700 px-3 py-2 text-left font-semibold capitalize text-white transition hover:bg-slate-600"
          >
            <span>{filter.name}</span>
            {openDropdowns[filter.name] ? (
              <FaChevronUp size={14} />
            ) : (
              <FaChevronDown size={14} />
            )}
          </button>

          <AnimatePresence initial={false}>
            {openDropdowns[filter.name] && (
              <motion.div
                key="dropdown"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropdownVariants}
                className="mt-2 space-y-2 overflow-hidden pl-3"
              >
                {filter.options?.map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer select-none items-center space-x-2 text-white"
                  >
                    <input
                      type="radio"
                      name={filter.name}
                      value={option}
                      checked={selectedFilters[filter.name] === option}
                      onChange={() => handleRadioChange(filter.name, option)}
                      className="h-4 w-4 accent-slate-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      <div className="mt-5">
        <motion.button
          variants={filterButtonVariants}
          initial="normal"
          whileHover="hovered"
          onClick={clearFilters}
          className="w-full rounded-md bg-black px-4 py-2 text-white transition hover:bg-white hover:text-black"
        >
          Clear Filters
        </motion.button>
      </div>
    </div>
  );
}
