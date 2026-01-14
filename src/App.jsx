import { useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [edit, setEdit] = useState(false);
  const [editNote, setEditNote] = useState({});

  const handleAddNotes = (notesData) => {
    setNotes((prev) => {
      sessionStorage.setItem("notes", JSON.stringify([...prev, notesData]));
      return [...prev, notesData];
    });
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

  const displayNotes =
    notes.length <= 0 ? (
      <NoNotes />
    ) : (
      <Notes notes={notes} onDelete={handleDelete} onEdit={handleEdit} />
    );

  return (
    <>
      <NavBar />
      <InputForm
        onAddNotes={handleAddNotes}
        onEdit={edit}
        editNote={editNote}
        onCancelEdit={handleCancelEdit}
      />
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
