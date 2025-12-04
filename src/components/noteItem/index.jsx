import { useDispatch } from "react-redux";
import { deleteNote, editNote, doneNote } from "../../redux/actions";
import styles from "../noteItem/styles.module.css";
import { useState } from "react";

function NoteItem({ note }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: note.title,
    text: note.text,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSave() {
    dispatch(editNote(note.id, formData));
    setIsEditing(false);
  }

  function handleCancel() {
    setFormData({ title: note.title, text: note.text });
    setIsEditing(false);
  }

  return (
    <div className={styles.noteItem}>
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p className={note.done ? styles.doneText : ""}>{note.text}</p>
          <div className={styles.buttons}>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => dispatch(deleteNote(note.id))}>
              Delete
            </button>
            <button onClick={() => dispatch(doneNote(note.id))}>Done</button>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteItem;
