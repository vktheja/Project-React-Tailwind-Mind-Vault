import notebook from "../../assets/images/minimalist-workspace-scene.png";
const NoNotes = () => {
  return (
    <div className="max-w-3xl mx-4 mds:mx-auto mds:py-10 flex flex-col items-center my-10 p-5 gap-4 mds:gap-8 rounded-md bg-white shadow-lg shadow-black/10 border border-gray-600/20">
      <img
        src={notebook}
        alt="No notes yet"
        className="w-40 h-40 mds:w-48 mds:h-48 opacity-80 rounded-md shadow-md shadow-black/10 border border-gray-300/30"
      />
      <div className="flex flex-col items-center gap-1 mds:gap-2 uppercase">
        <p className="text-slate-600 font-medium text-lg mds:text-xl tracking-wider md:tracking-widest">
          No notes yet
        </p>
        <p className="text-sm text-slate-400/90">
          Start adding your thoughts...
        </p>
      </div>
    </div>
  );
};

export default NoNotes;
