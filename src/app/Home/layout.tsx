"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export async function fetchData(
  queryText: string,
  queryPage: "character" | "location" | "episode",
) {
  const url = `https://rickandmortyapi.com/api/${queryPage}/?name=${queryText}`;

  if (queryText.length < 3) return;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching data:", error.message);
      throw error;
    } else {
      console.error("Unknown error occurred");
      throw new Error("Unknown error occurred");
    }
  }
}

const queryClient = new QueryClient();

function page({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default page;
