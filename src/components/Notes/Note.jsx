import SimpleBar from "simplebar-react";
import Date from "../../shared/icons/Date";
import Edit from "../../shared/icons/Edit";
import Delete from "../../shared/icons/Delete";

const Note = (props) => {
  //   const { note } = props;
  return (
    <div className="group flex flex-col bg-white px-4 rounded-md shadow-lg shadow-black/10 border border-gray-600/20 transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-xl">
      <div className="border-b py-2 border-gray-200 text-slate-500 font-semibold text-base mds:text-sm">
        First Note
      </div>
      <SimpleBar className="h-32">
        <div className="py-2 mr-2 text-base mds:text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          soluta cumque nihil iure quibusdam, dolores nostrum asperiores de
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          asperiores similique non repellendus dolor animi laboriosam eos quam
          qui eligendi deserunt, repudiandae eveniet doloremque eius impedit
          laudantium tenetur harum eum?
        </div>
      </SimpleBar>
      <div className="border-b border-gray-200 mt-2 "></div>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center space-x-1 text-sm text-gray-600">
          <Date className="w-4 mds:w-3" />
          <p>January 08, 2026</p>
        </div>
        <div className="flex gap-6 items-center opacity-70 group-hover:opacity-100 transition-opacity duration-200">
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
