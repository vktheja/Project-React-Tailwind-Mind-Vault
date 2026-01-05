const SearchAndSortBar = () => {
  return (
    <div className="flex justify-between space-x-3 max-w-3xl bg-gray-200 mx-4 md:mx-auto my-6 rounded-md shadow-lg shadow-black/10 border border-gray-600/20 p-1">
      <input
        type="text"
        className="flex-1 p-2 text-slate-600 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border focus:border-slate-400 rounded-lg"
        placeholder="Search notes..."
      />
      <div className="flex space-x-2 items-center">
        <label
          htmlFor="sortNotes"
          className="text-slate-500 tracking-wider md:tracking-widest text-sm"
        >
          Sort by:
        </label>
        <select
          name="sortNotes"
          id="sortNotes"
          className="bg-gray-100 text-slate-600 font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-0 border border-gray-300 hover:border-slate-400 tracking-wider md:tracking-widest"
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndSortBar;
