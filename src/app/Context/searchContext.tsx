"use client ";
import { useQuery } from "@tanstack/react-query";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useParams } from "next/navigation";
import { filterData } from "../../../Constants/data";
import { fetchData } from "../_utils/fetchData";
import { PageData } from "../allTypes";

type Category = "character" | "location" | "episode";
interface Value {
  currentPage?: number;
  LastPageNumber?: number;
  resultsFound?: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  category: Category;
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  handleRadioChange: (filterName: string, value: string) => void;
  clearFilters: () => void;
  selectedFilters: Record<string, string>;
  setSelectedFilters: Dispatch<SetStateAction<Record<string, string>>>;
  data?: PageData;
  isLoading: boolean;
  error: unknown;
}

const searchContext = createContext<Value>({
  LastPageNumber: undefined,
  resultsFound: undefined,
  currentPage: undefined,
  category: "character",
  searchText: "",
  setCurrentPage: () => {},
  setSearchText: () => {},
  handleRadioChange: () => {},
  clearFilters: () => {},
  selectedFilters: {},
  setSelectedFilters: () => {},
  data: undefined,
  isLoading: false,
  error: null,
});

function SearchProvider({ children }: { children: React.ReactNode }) {
  const { category }: { category: Category } = useParams();
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >(
    filterData[category].reduce(
      (acc, filter) => {
        acc[filter.name] = ""; // Default empty selection
        return acc;
      },
      {} as Record<string, string>,
    ),
  );

  //Form Filter Query String
  const filterQueryString = Object.entries(selectedFilters)
    .filter(([_, value]) => value) // Remove empty selections
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&");

  let url = "";
  if (!searchText && !filterQueryString) url = "" + `?page=${currentPage}`;
  if (!searchText && filterQueryString)
    url = `?${filterQueryString}&page=${currentPage}`;
  if (searchText && !filterQueryString)
    url = `?name=${searchText}&page=${currentPage}`;
  if (searchText && filterQueryString)
    url = `?name=${searchText}&${filterQueryString}&page=${currentPage}`;

  // url = url + `&page=${currenPageNumber}`;
  // console.log(url);

  // let url = "";
  // if (!searchText && !filterQueryString) url = ""
  // if (!searchText && filterQueryString) url = `?${filterQueryString}`;
  // if (searchText && !filterQueryString) url = `?name=${searchText}`;
  // if (searchText && filterQueryString)
  //   url = `?name=${searchText}&${filterQueryString}`;

  ////////////////////////
  // Handle radio button change
  function handleRadioChange(filterName: string, value: string) {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  }

  // **Reset filters**
  function clearFilters() {
    setSelectedFilters(
      filterData[category].reduce(
        (acc, filter) => {
          acc[filter.name] = ""; // Reset all filters to empty
          return acc;
        },
        {} as Record<string, string>,
      ),
    );
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchData", url, category],
    queryFn: () => fetchData(url, category),
  });

  const resultsFound = data?.info?.count;
  const LastPageNumber = data?.info?.pages;

  const value = {
    currentPage,
    setCurrentPage,
    LastPageNumber,
    resultsFound,
    category,
    searchText,
    setSearchText,
    handleRadioChange,
    clearFilters,
    selectedFilters,
    setSelectedFilters,
    data,
    isLoading,
    error,
  };

  return (
    <searchContext.Provider value={value}>{children}</searchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(searchContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export { SearchProvider, useSearch };
