import { useState } from "react";
import Note from "./Note";
const Notes = (props) => {
  const { notes, scrollToForm, onDelete } = props;
  const [deleteId, setDeleteId] = useState(0);

  const handleDeleteWarning = (id) => {
    setDeleteId(id);
  };

  const handleDelete = () => {
    onDelete(deleteId);
    setDeleteId(0);
  };

  const handleCancelDelete = () => {
    setDeleteId(0);
  };

  const noteCard = notes.map((note) => (
    <Note
      key={note.id}
      {...note}
      onDelete={handleDelete}
      onEdit={props.onEdit}
      scrollToForm={scrollToForm}
      deleteId={deleteId}
      onDeleteWarning={handleDeleteWarning}
      onCancelDelete={handleCancelDelete}
    />
  ));
  return (
    <div className="grid grid-cols-1 mds:grid-cols-2 gap-4 auto-rows-fr max-w-3xl mx-4 mds:mx-auto">
      {noteCard}
    </div>
  );
};

export default Notes;
