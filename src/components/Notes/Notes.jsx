import Note from "./Note";
const Notes = (props) => {
  const { notes } = props;
  const noteCard = notes.map((note) => <Note key={note.id} {...note} />);
  return (
    <div className="grid grid-cols-1 mds:grid-cols-2 gap-4 auto-rows-fr max-w-3xl mx-4 mds:mx-auto">
      {noteCard}
    </div>
  );
};

export default Notes;
