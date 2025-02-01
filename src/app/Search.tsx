function Search() {
  return (
    <div className="flex items-center justify-center gap-16 border-b-2 border-b-white py-3">
      <input type="text" className="block w-80 rounded-xl px-4 py-2" />
      <div className="flex gap-5">
        <label className="flex items-center gap-1">
          <input type="checkbox" />
          Characters
        </label>
        <label className="flex items-center gap-1">
          <input type="checkbox" />
          Characters
        </label>
        <label className="flex items-center gap-1">
          <input type="checkbox" />
          Characters
        </label>
      </div>
    </div>
  );
}

export default Search;
