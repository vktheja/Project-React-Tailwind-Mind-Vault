import { useRef, useState } from "react";
const InputForm = (props) => {
  const { onAddNotes } = props;
  const [textBoxError, setTextBoxError] = useState(false);
  const [textAreaError, setTextAreaError] = useState(false);
  const titleRef = useRef();
  const notesRef = useRef();

  const errorClass = "placeholder:text-red-400 border-red-500";
  const inputClass = "placeholder:text-gray-400 border-gray-300";
  const btnStyles =
    textBoxError || textAreaError
      ? "bg-gray-200 text-slate-500 border border-slate-300"
      : "bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors duration-200";

  const inputBaseClass =
    "text-md p-2 text-slate-600 border focus:outline-none focus:ring-0 rounded-md";

  const titleInputClass = `${inputBaseClass} ${
    textBoxError ? errorClass : inputClass
  }`;

  const textAreaClass = `${inputBaseClass} ${
    textAreaError ? errorClass : inputClass
  } h-24 mds:h-40 resize-none`;

  const handleSubmit = (e) => {
    e.preventDefault();

    const fulldate = new Date();

    const title = titleRef.current.value.trim();
    const message = notesRef.current.value.trim();

    if (!message || !title) {
      if (!title) {
        setTextBoxError(true);
      }

      if (!message) {
        setTextAreaError(true);
      }

      return;
    }

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
    setTextBoxError(false);
    setTextAreaError(false);
  };
  return (
    <>
      <div className="max-w-3xl bg-white mx-4 mds:mx-auto my-6 rounded-md shadow-lg shadow-black/10 border border-gray-600/20">
        <h2 className="font-medium text-lg p-2 bg-gray-100 rounded-t-md border-b border-gray-300/70">
          Add New Note
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2 p-4">
          <input
            name="notes-title"
            type="text"
            placeholder="Enter note title..."
            className={titleInputClass}
            autoComplete="off"
            ref={titleRef}
            onChange={(e) => {
              if (textBoxError && e.target.value.trim().length > 0)
                setTextBoxError(false);
            }}
          />

          <textarea
            name="notes-data"
            id="notes-data"
            className={textAreaClass}
            placeholder="Write your thoughts here..."
            rows={3}
            ref={notesRef}
            onChange={(e) => {
              if (textAreaError && e.target.value.trim().length > 0)
                setTextAreaError(false);
            }}
          ></textarea>
          <button
            type="submit"
            className={`ml-auto text-sm px-4 py-2 rounded-lg ${btnStyles}`}
            disabled={textAreaError || textBoxError}
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default InputForm;
