import Search from "../shared/icons/Search";

const SearchAndSortBar = () => {
  return (
    <div
      className="
        flex flex-col space-y-1 space-x-0
        mds:flex-row mds:space-x-3 mds:space-y-0 mds:items-center
        max-w-3xl bg-gray-200 mx-4 md:mx-auto my-6
        rounded-md shadow-lg shadow-black/10
        border border-gray-600/20 p-2
      "
    >
      <div className="relative flex mds:flex-1 group">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-slate-500 w-5 pointer-events-none" />
        <input
          type="text"
          className="
          w-full p-2 pl-8 text-slate-600
          placeholder:text-gray-400
          focus:outline-none focus:ring-0
          focus:border focus:border-slate-400
          rounded-lg
        "
          placeholder="Search notes..."
        />
      </div>

      <div
        className="
          flex items-center justify-between
          mds:justify-start mds:gap-2
        "
      >
        <label
          htmlFor="sortNotes"
          className="
            text-slate-500 text-base
            tracking-wider md:tracking-widest
          "
        >
          Sort by:
        </label>

        <select
          name="sortNotes"
          id="sortNotes"
          className="
            bg-gray-100 text-slate-600 font-medium
            py-2 px-4 rounded-md
            border border-gray-300
            hover:border-slate-400
            focus:outline-none focus:ring-0
            tracking-wider md:tracking-widest
            transition-colors duration-200
          "
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndSortBar;
