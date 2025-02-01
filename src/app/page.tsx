export default function Home() {
  return (
    <div className="container mx-auto mt-2 flex bg-green-600">
      <div className="basis-1/5 bg-red-500">Filter Component</div>
      <div className="basis-4/5 bg-blue-600">
        <div className="bg-violet-500">Search</div>
        <div className="bg-green-500"> Result </div>
      </div>
    </div>
  );
}
