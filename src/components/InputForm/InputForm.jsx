import { useRef, useState, useEffect } from "react";
const InputForm = (props) => {
  const { onAddNotes, onEdit, onCancelEdit, editNote } = props;
  const [textBoxError, setTextBoxError] = useState(false);
  const [textAreaError, setTextAreaError] = useState(false);
  const [clear, setClear] = useState(false);

  const titleRef = useRef();
  const notesRef = useRef();

  const emptyForm = () => {
    titleRef.current.value = "";
    notesRef.current.value = "";
    setClear(false);
  };

  useEffect(() => {
    if (onEdit) {
      titleRef.current.value = editNote.title;
      notesRef.current.value = editNote.message;
      setClear(true);
    } else {
      emptyForm();
    }
  }, [onEdit]);

  const handleTitle = (e) => {
    if (e.target.value.trim().length > 0) {
      if (textBoxError) setTextBoxError(false);
      setClear(true);
    } else {
      if (!onEdit) {
        if (notesRef.current?.value.trim().length <= 0) setClear(false);
      }
    }
  };

  const handleMessage = (e) => {
    if (e.target.value.trim().length > 0) {
      if (textAreaError) setTextAreaError(false);
      setClear(true);
    } else {
      if (!onEdit) {
        if (titleRef.current?.value.trim().length <= 0) setClear(false);
      }
    }
  };

  const handleClear = () => {
    if (onEdit) {
      onCancelEdit();
    } else {
      emptyForm();
    }
  };

  console.log("z", titleRef.current?.value);

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
          {onEdit ? "Edit Note" : "Add New Note"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2 p-4">
          <input
            name="notes-title"
            type="text"
            placeholder="Enter note title..."
            className={titleInputClass}
            autoComplete="off"
            ref={titleRef}
            onChange={(e) => handleTitle(e)}
          />

          <textarea
            name="notes-data"
            id="notes-data"
            className={textAreaClass}
            placeholder="Write your thoughts here..."
            rows={3}
            ref={notesRef}
            onChange={(e) => handleMessage(e)}
          ></textarea>
          <div className="flex ml-auto gap-2">
            {clear && (
              <button
                type="button"
                className={`min-w-20 text-sm px-4 py-2 rounded-lg ${
                  onEdit ? "tracking-normal" : "tracking-widest"
                } bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors duration-200`}
                onClick={handleClear}
              >
                {onEdit ? "Cancel" : "Clear"}
              </button>
            )}
            <button
              type="submit"
              className={`min-w-20 text-sm px-4 py-2 rounded-lg ${
                onEdit ? "tracking-normal" : "tracking-widest"
              } ${btnStyles}`}
              disabled={textAreaError || textBoxError}
            >
              {onEdit ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default InputForm;
