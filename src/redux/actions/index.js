export function addNote(data) {
  return {
    type: "ADD_NOTE",
    payload: data,
  };
}

export function editNote(id, updateData) {
  return {
    type: "EDIT_NOTE",
    payload: { id, updateData },
  };
}

export function deleteNote(id) {
  return {
    type: "DELETE_NOTE",
    payload: id,
  };
}

export function doneNote(id) {
  return {
    type: "DONE",
    payload: id,
  };
}
