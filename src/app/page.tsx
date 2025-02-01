export default async function Home() {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json();

  console.log(data);

  return (
    <div className="container mx-auto mt-2 flex h-[740px] overflow-hidden rounded-lg border-2 border-white bg-black/70">
      home
    </div>
  );
}
