export async function fetchData(
  queryText: string,
  queryPage: "character" | "location" | "episode",
) {
  const url = `https://rickandmortyapi.com/api/${queryPage}/${queryText}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const error = new Error(`Request failed with status ${response.status}`);
      (error as any).status = response.status;
      (error as any).url = url;
      throw error;
    }

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    throw error;
  }
}
