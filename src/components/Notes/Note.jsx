import SimpleBar from "simplebar-react";
import Date from "../../shared/icons/Date";
import Edit from "../../shared/icons/Edit";
import Delete from "../../shared/icons/Delete";

const Note = (props) => {
  const { date, title, message, id, onDelete, onEdit, updated } = props;

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleEdit = (id) => {
    onEdit(id);
  };

  return (
    <div className="group flex flex-col bg-white px-4 rounded-md shadow-lg shadow-black/10 border border-gray-600/20 transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-xl">
      <div className="flex justify-between items-center border-b py-2 border-gray-200 text-slate-500 font-semibold text-base mds:text-sm min-h-12">
        <span className="truncate max-w-[65%]">{title}</span>

        <div className="flex justify-end">
          <div
            className={`text-sm mds:text-xs font-bold border rounded-md py-1 px-2
        transition-all duration-200 ease-out min-w-25 text-center
        ${
          updated.length > 0
            ? "text-gray-600 border-blue-300 bg-blue-300 opacity-100"
            : "invisible opacity-0"
        }`}
          >
            <span className="block group-hover:hidden tracking-widest">
              Edited
            </span>
            <span className="hidden group-hover:block">{updated}</span>
          </div>
        </div>
      </div>
      <SimpleBar className="h-32">
        <div className="py-2 mr-2 text-base mds:text-sm">{message}</div>
      </SimpleBar>
      <div className="border-b border-gray-200 mt-2 "></div>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center space-x-1 text-sm mds:text-xs text-gray-600">
          <Date className="w-4 mds:w-3" />
          <p>{date}</p>
        </div>
        <div className="flex gap-6 items-center opacity-70 group-hover:opacity-100 transition-opacity duration-200">
          <button
            className="flex items-center space-x-1 text-sm mds:text-xs text-gray-600 hover:text-blue-500 cursor-pointer"
            type="button"
            onClick={() => handleEdit(id)}
          >
            <Edit className="w-4 mds:w-3 transition-colors duration-200" />
            <span>Edit</span>
          </button>
          <button
            className="flex items-center space-x-1 text-sm mds:text-xs text-gray-600 hover:text-red-500 cursor-pointer"
            type="button"
            onClick={() => handleDelete(id)}
          >
            <Delete className="w-4 mds:w-3 transition-colors duration-200" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
