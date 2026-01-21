import { useState, useEffect, useRef } from "react";
import _ from "lodash";
import NavBar from "./components/NavBar/NavBar";
import InputForm from "./components/InputForm/InputForm";
import SearchAndSortBar from "./components/SearchAndSortBar/SearchAndSortBar";
import Notes from "./components/Notes/Notes";
import NoNotes from "./components/NoNotes/NoNotes";

const App = () => {
  const [notes, setNotes] = useState(() => {
    let sessionNotes = sessionStorage.getItem("notes");
    return sessionNotes ? JSON.parse(sessionNotes) : [];
  });
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [edit, setEdit] = useState(false);
  const [editNote, setEditNote] = useState({});

  const formRef = useRef(null);

  useEffect(() => {
    const sortOrder = sortBy === "latest" ? "desc" : "asc";
    const orderedNotes = _.orderBy(notes, ["id"], [sortOrder]);
    const searchString = searchTerm.toLowerCase();
    const searchFilteredNotes = orderedNotes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchString) ||
        note.message.toLowerCase().includes(searchString)
    );
    setFilteredNotes(searchFilteredNotes);
  }, [searchTerm, sortBy, notes]);

  const handleAddNotes = (notesData) => {
    if (edit) {
      const updatedNotes = notes.map((note) => {
        if (notesData.id === note.id) {
          note = { ...notesData };
        }
        return note;
      });

      sessionStorage.setItem("notes", JSON.stringify(updatedNotes));
      setNotes(updatedNotes);

      setEdit(false);
      setEditNote({});
    } else {
      setNotes((prevData) => {
        sessionStorage.setItem(
          "notes",
          JSON.stringify([notesData, ...prevData])
        );
        return [notesData, ...prevData];
      });
    }
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleSort = (value) => {
    setSortBy(value);
  };

  const handleDelete = (id) => {
    const updatedNotesList = notes.filter((note) => id !== note.id);
    sessionStorage.setItem("notes", JSON.stringify(updatedNotesList));
    setNotes(updatedNotesList);
  };

  const handleEdit = (id) => {
    const editNote = notes.find((note) => id === note.id);
    if (!editNote) return;
    setEdit(true);
    setEditNote(editNote);
  };

  const handleCancelEdit = () => {
    setEditNote({});
    setEdit(false);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const displayNotes =
    filteredNotes.length <= 0 ? (
      <NoNotes />
    ) : (
      <Notes
        notes={filteredNotes}
        onDelete={handleDelete}
        onEdit={handleEdit}
        scrollToForm={scrollToForm}
      />
    );

  return (
    <>
      <NavBar />
      <div className="scroll-mt-20" ref={formRef}>
        <InputForm
          onAddNotes={handleAddNotes}
          onEdit={edit}
          editNote={editNote}
          onCancelEdit={handleCancelEdit}
        />
      </div>
      <SearchAndSortBar
        onSearch={handleSearch}
        onSort={handleSort}
        sortBy={sortBy}
        searchTerm={searchTerm}
      />
      {displayNotes}
    </>
  );
};

export default App;
