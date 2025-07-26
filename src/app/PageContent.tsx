"use client";

import CharactersSkeleton from "./_UI/Skeletons";
import Card from "./_UI/Card";
import { useSearch } from "./Context/searchContext";
import { motion } from "framer-motion";

function PageContent() {
  const { data, isLoading, error, category } = useSearch();

  if (error?.status === 404) return <ErrorNotFound />;

  return (
    <div className="flex flex-1 flex-col gap-4 p-5">
      {isLoading ? (
        <CharactersSkeleton type={category} />
      ) : (
        <>
          <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {data?.results?.map((item) => (
              <Card data={item} type={category} key={item.id} />
            ))}
          </motion.div>
          <ServerSidePagination />
        </>
      )}
    </div>
  );
}

export default PageContent;

function ServerSidePagination() {
  const { setCurrentPage, currentPage, LastPageNumber } = useSearch();

  return (
    <div className="mt-auto flex items-center justify-center gap-2">
      <button
        onClick={() => {
          if (currentPage === 1) return;
          setCurrentPage((prev) => Math.max(prev - 1, 1));
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        disabled={currentPage === 1}
        className={`rounded-lg px-4 py-2 duration-300 ${
          currentPage === 1
            ? "cursor-not-allowed bg-gray-600"
            : "w-[92px] bg-black text-white hover:bg-white hover:text-black"
        }`}
      >
        Previous
      </button>

      <span className="rounded-full bg-black px-4 py-2 text-white">
        Page {currentPage}
      </span>

      <button
        onClick={() => {
          if (currentPage === LastPageNumber) return;
          setCurrentPage((prev) => (prev < LastPageNumber! ? prev + 1 : prev));
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        disabled={currentPage! >= LastPageNumber!}
        className={`rounded-lg px-4 py-2 duration-300 ${
          currentPage! >= LastPageNumber!
            ? "cursor-not-allowed bg-gray-600"
            : "w-[92px] bg-black text-white hover:bg-white hover:text-black"
        }`}
      >
        Next
      </button>
    </div>
  );
}

function ErrorNotFound() {
  return (
    <div className="flex flex-1 flex-col items-center bg-gradient-to-br from-slate-800/80 to-slate-600/80 md:pb-40 md:pt-10 lg:pt-0">
      <p className="bg-[url(/oops-bg.jpg)] bg-cover bg-clip-text text-[7rem] font-extrabold text-transparent md:text-[15rem]">
        Opps!
      </p>
      <p className="mt-4 text-balance text-center italic md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        Looks like this piece doesn’t fit. Try a different search and see what
        you discover!
      </p>
    </div>
  );
}
