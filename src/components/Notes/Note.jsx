import Date from "../../shared/icons/Date";
import Edit from "../../shared/icons/Edit";
import Delete from "../../shared/icons/Delete";

const Note = (props) => {
  //   const { note } = props;
  return (
    <div className="flex flex-col max-w-3xl bg-white mx-4 mds:mx-auto my-6 px-4 rounded-md shadow-lg shadow-black/10 border border-gray-600/20">
      <div className="border-b py-2 border-gray-200 text-slate-500 font-semibold text-lg">
        First Note
      </div>
      <div className="py-2 h-30 overflow-y-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        soluta cumque nihil iure quibusdam, dolores nostrum asperiores deserunt
        omnis magni sapiente ullam doloribus quis. Similique pariatur tempora
        ipsum reiciendis nostrum!
      </div>
      <div className="border-b border-gray-200 mt-2 "></div>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center space-x-1 text-sm text-gray-600">
          <Date className="w-4" />
          <p>January 08, 2026</p>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <Edit className="w-4" />
            <p>Edit</p>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <Delete className="w-4" />
            <p>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
