"use client";
import { useQuery } from "@tanstack/react-query";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { useParams, useRouter } from "next/navigation";
import { filterData } from "../../../Constants/data";
import { fetchData } from "../_utils/fetchData";
import { PageData } from "../app.type.";

type Category = "character" | "location" | "episode";

interface Value {
  currentPage: number;
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

const searchContext = createContext<Value | undefined>(undefined);

function SearchProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const params = useParams();

  // Validate category param
  const rawCategory = params.category as string | undefined;
  const allowedCategories: readonly Category[] = [
    "character",
    "location",
    "episode",
  ];
  const isValidCategory =
    rawCategory && allowedCategories.includes(rawCategory as Category);
  const category: Category = isValidCategory
    ? (rawCategory as Category)
    : "character";

  // Redirect if invalid
  useEffect(() => {
    if (!isValidCategory) {
      router.replace("/oops/page-not-found");
    }
  }, [isValidCategory, router]);

  // State
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({});

  // Initialize filters when category changes
  useEffect(() => {
    if (isValidCategory) {
      setSelectedFilters(
        filterData[category].reduce(
          (acc, filter) => {
            acc[filter.name] = "";
            return acc;
          },
          {} as Record<string, string>,
        ),
      );
    }
  }, [category, isValidCategory]);

  // Reset page when filters or searchText change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchText, selectedFilters]);

  // Memoize filter query string
  const filterQueryString = useMemo(() => {
    return Object.entries(selectedFilters)
      .filter(([_, value]) => value)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      )
      .join("&");
  }, [selectedFilters]);

  // Memoize url
  const url = useMemo(() => {
    const parts: string[] = [];
    if (searchText) parts.push(`name=${encodeURIComponent(searchText)}`);
    if (filterQueryString) parts.push(filterQueryString);
    parts.push(`page=${currentPage}`);
    return `?${parts.join("&")}`;
  }, [searchText, filterQueryString, currentPage]);

  // Query
  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchData", url, category],
    queryFn: () => fetchData(url, category),
  });

  // Handlers
  function handleRadioChange(filterName: string, value: string) {
    setSelectedFilters((prev) => ({ ...prev, [filterName]: value }));
  }

  function clearFilters() {
    setSelectedFilters(
      filterData[category].reduce(
        (acc, filter) => {
          acc[filter.name] = "";
          return acc;
        },
        {} as Record<string, string>,
      ),
    );
  }

  // Derived data
  const resultsFound = data?.info?.count;
  const LastPageNumber = data?.info?.pages;

  const value: Value = {
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
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}

export { SearchProvider, useSearch };
