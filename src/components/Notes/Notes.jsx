import Note from "./Note";
const Notes = (props) => {
  const { notes } = props;
  return (
    <div className="grid grid-cols-1 mds:grid-cols-2 gap-4 auto-rows-fr max-w-3xl mx-4 mds:mx-auto">
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default Notes;
