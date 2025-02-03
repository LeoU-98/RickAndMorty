export async function fetchData(
  queryText: string,
  queryPage: "character" | "location" | "episode",
) {
  const url = `https://rickandmortyapi.com/api/${queryPage}/${queryText}`;

  console.log(url);

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
