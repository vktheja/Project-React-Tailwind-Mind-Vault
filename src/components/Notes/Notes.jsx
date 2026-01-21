import Note from "./Note";
const Notes = (props) => {
  const { notes, scrollToForm } = props;

  const noteCard = notes.map((note) => (
    <Note
      key={note.id}
      {...note}
      onDelete={props.onDelete}
      onEdit={props.onEdit}
      scrollToForm={scrollToForm}
    />
  ));
  return (
    <div className="grid grid-cols-1 mds:grid-cols-2 gap-4 auto-rows-fr max-w-3xl mx-4 mds:mx-auto">
      {noteCard}
    </div>
  );
};

export default Notes;
