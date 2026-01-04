import { useRef } from "react";
const InputForm = (props) => {
  const { onAddNotes } = props;
  const titleRef = useRef();
  const notesRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fulldate = new Date();

    const title = titleRef.current.value.trim();
    const message = notesRef.current.value.trim();

    const id = fulldate.getTime();

    // const date = fulldate.getDate();
    // const month = fulldate.toLocaleString("en-US", { month: "long" });
    // const year = fulldate.getFullYear();
    // const formattedDate = month + " " + date + ", " + year;

    const formattedDate = fulldate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const note = {
      id,
      title,
      message,
      date: formattedDate,
    };

    onAddNotes(note);

    titleRef.current.value = "";
    notesRef.current.value = "";
  };
  return (
    <>
      <div className="max-w-3xl bg-white mx-4 md:mx-auto my-6 rounded-md shadow-lg shadow-black/10 border border-gray-600/20">
        <h2 className="font-medium text-lg p-2 bg-gray-100 rounded-t-md border-b border-gray-300/70">
          Add New Note
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2 p-4">
          <input
            name="notes-title"
            type="text"
            placeholder="Enter note title..."
            className="text-md text-slate-600 p-2 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-0 rounded-md"
            autoComplete="off"
            ref={titleRef}
          />
          <textarea
            name="notes-data"
            id="notes-data"
            className="text-md p-2 text-slate-600 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-0 rounded-md h-24 md:h-40 resize-none"
            placeholder="Write your thoughts here..."
            rows={3}
            ref={notesRef}
          ></textarea>
          <button
            type="submit"
            className="ml-auto bg-blue-500 text-sm text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors duration-200"
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default InputForm;
