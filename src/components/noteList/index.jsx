import { useSelector } from "react-redux";
import NoteItem from "../noteItem";

function NoteList() {
  const notes = useSelector((state) => state.notes);

  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
