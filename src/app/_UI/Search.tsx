"use client";

import { TbArrowWaveRightDown, TbArrowWaveRightUp } from "react-icons/tb";
import { useSearch } from "../Context/searchContext";
import { motion } from "motion/react";

const inputSearchVariants = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

function Search() {
  const {
    searchText,
    setSearchText,
    resultsFound,
    setCurrentPage,
    category,
    LastPageNumber,
    currentPage,
    data,
  } = useSearch();

  function handleOnSearchText(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentPage(1);
    setSearchText(e.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-between gap-3 border-b-2 border-b-white bg-gradient-to-br from-slate-800/80 to-slate-600/80 px-2 py-3 lg:flex-row lg:px-20">
      <motion.input
        variants={inputSearchVariants}
        initial="hidden"
        whileFocus="visible"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => handleOnSearchText(e)}
        className="block w-80 rounded-full px-4 py-1 text-gray-900 outline-none"
      />
      {resultsFound ? (
        <div className="flex items-center gap-2 text-nowrap text-xs sm:text-base">
          <p className="flex gap-2 capitalize">
            <span>
              Found {resultsFound} {category}
              {resultsFound > 1 ? "s" : ""}
            </span>
          </p>
          <TbArrowWaveRightUp className="size-5 sm:size-8" />
          <p className="flex gap-2">
            {LastPageNumber || 1 > 1 ? (
              <span>
                {LastPageNumber} Page{LastPageNumber! > 1 ? "s" : null}
              </span>
            ) : null}
          </p>
          <TbArrowWaveRightDown className="size-5 sm:size-8" />
          <p className="flex gap-1">
            Page
            {currentPage || 1 >= 1 ? (
              <span className="capitalize">
                {currentPage} : {data?.results?.length} {category}
                {resultsFound > 1 ? "s" : ""}
              </span>
            ) : null}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default Search;
