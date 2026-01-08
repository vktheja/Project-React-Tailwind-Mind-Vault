import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import InputForm from "./components/InputForm/InputForm";
import SearchAndSortBar from "./components/SearchAndSortBar/SearchAndSortBar";
import Notes from "./components/Notes/Notes";
import NoNotes from "./components/NoNotes/NoNotes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNotes = (notesData) => {
    setNotes((prev) => [...prev, notesData]);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleSort = (value) => {
    setSortBy(value);
  };

  return (
    <>
      <NavBar />
      <InputForm onAddNotes={handleAddNotes} />
      <SearchAndSortBar
        onSearch={handleSearch}
        onSort={handleSort}
        sortBy={sortBy}
        searchTerm={searchTerm}
      />
      <Notes notes={notes} />
      {/* {notes.length <= 0 && <NoNotes />} */}
    </>
  );
};

export default App;
