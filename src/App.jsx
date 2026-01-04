import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import InputForm from "./components/InputForm/InputForm";

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNotes = (notesData) => {
    setNotes([...notes, notesData]);
  };

  return (
    <>
      <NavBar />
      <InputForm onAddNotes={handleAddNotes} />
    </>
  );
};

export default App;
