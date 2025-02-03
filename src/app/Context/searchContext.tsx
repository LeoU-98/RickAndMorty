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

type Category = "character" | "location" | "episode";
interface Value {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  handleRadioChange: () => void;
  applyFilters: () => void;
  clearFilters: () => void;
  isLoading: boolean;
  //   error: string;
}

const searchContext = createContext<Value | null>(null);

function SearchProvider({ children }: { children: React.ReactNode }) {
  const { category }: { category: Category } = useParams();
  const [searchText, setSearchText] = useState("");
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

  let url: string;
  if (!searchText && !filterQueryString) url = "";
  if (!searchText && filterQueryString) url = `?${filterQueryString}`;
  if (searchText && !filterQueryString) url = `?name=${searchText}`;
  if (searchText && filterQueryString)
    url = `?name=${searchText}&${filterQueryString}`;

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
    queryKey: ["fetchData", url, category], // query key
    queryFn: () => fetchData(url, category), // query function
  });

  const value = {
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
