import Date from "../../shared/icons/Date";
import Edit from "../../shared/icons/Edit";
import Delete from "../../shared/icons/Delete";

const Note = (props) => {
  //   const { note } = props;
  return (
    <div className="flex flex-col bg-white px-4 rounded-md shadow-lg shadow-black/10 border border-gray-600/20">
      <div className="border-b py-2 border-gray-200 text-slate-500 font-semibold text-base mds:text-sm">
        First Note
      </div>
      <div className="py-2 h-32 overflow-y-auto text-base mds:text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        soluta cumque nihil iure quibusdam, dolores nostrum asperiores deserunt
        omnis magni sapiente ullam doloribus quis. Similique pariatur tempora
        ipsum reiciendis nostrum!
      </div>
      <div className="border-b border-gray-200 mt-2 "></div>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center space-x-1 text-sm text-gray-600">
          <Date className="w-4 mds:w-3" />
          <p>January 08, 2026</p>
        </div>
        <div className="flex gap-6 items-center">
          <button className="flex items-center space-x-1 text-sm mds:text-xs text-gray-600 hover:text-blue-500 cursor-pointer">
            <Edit className="w-4 mds:w-3 transition-colors duration-200" />
            <span>Edit</span>
          </button>
          <button className="flex items-center space-x-1 text-sm mds:text-xs text-gray-600 hover:text-red-500 cursor-pointer">
            <Delete className="w-4 mds:w-3 transition-colors duration-200" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
