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
import { useRouter } from "next/navigation";
import { fetchData } from "../_utils/fetchData";

interface Value {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  handleRadioChange: () => void;
  applyFilters: () => void;
  clearFilters: () => void;
  isLoading: boolean;
  //   error: string;
}

type Category = "character" | "location" | "episode";
const searchContext = createContext<Value | null>(null);

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchText, setSearchText] = useState("Hello from Context");
  const { category }: { category: Category } = useParams();
  const router = useRouter();

  const searchParams = "?name=rick";

  // Initialize state for selected filters
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
      filterData[category].reduce(
        (acc, filter) => {
          acc[filter.name] = ""; // Reset all filters to empty
          return acc;
        },
        {} as Record<string, string>,
      ),
    );

    router.push(`/items/${category}`); // Reset URL to remove query params
  };

  ////////////////////////////////////////////////////////////

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchData", searchParams, category], // query key
    queryFn: () => fetchData(searchParams, category), // query function
  });

  ///////////////////////////////////////////////////////////////////////////////

  const value = {
    category,
    searchText,
    setSearchText,
    handleRadioChange,
    applyFilters,
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
};

function useSearch() {
  const context = useContext(searchContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export { SearchProvider, useSearch };
