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

  const displayNotes =
    notes.length <= 0 ? <NoNotes /> : <Notes notes={notes} />;

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
      {displayNotes}
    </>
  );
};

export default App;
