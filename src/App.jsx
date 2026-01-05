import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import InputForm from "./components/InputForm/InputForm";
import SearchAndSortBar from "./SearchAndSortBar/SearchAndSortBar";

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNotes = (notesData) => {
    setNotes([...notes, notesData]);
  };

  return (
    <>
      <NavBar />
      <InputForm onAddNotes={handleAddNotes} />
      <SearchAndSortBar />
    </>
  );
};

export default App;
