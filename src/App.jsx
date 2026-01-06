import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import InputForm from "./components/InputForm/InputForm";
import SearchAndSortBar from "./components/SearchAndSortBar/SearchAndSortBar";
import NoNotes from "./components/NoNotes/NoNotes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, SetSortBy] = useState("latest");

  const handleAddNotes = (notesData) => {
    setNotes([...notes, notesData]);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleSort = (value) => {
    SetSortBy(value);
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
      <NoNotes />
    </>
  );
};

export default App;
