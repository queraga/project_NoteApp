const initialState = {
  notes: [],
};

const noteReducer = (state = initialState, action) => {
  if (action.type === "ADD_NOTE") {
    return {
      ...state,
      notes: [...state.notes, action.payload],
    };
    // state.notes = [...state.notes, action.payload];
  }

  if (action.type === "EDIT_NOTE") {
    return {
      ...state,
      notes: state.notes.map((note) =>
        note.id === action.payload.id
          ? { ...note, ...action.payload.updateData }
          : note
      ),
    };
  }

  if (action.type === "DELETE_NOTE") {
    return {
      ...state,
      notes: state.notes.filter((note) => note.id !== action.payload),
    };
  }

  if (action.type === "DONE") {
    return {
      ...state,
      notes: state.notes.map((note) =>
        note.id === action.payload ? { ...note, done: !note.done } : note
      ),
    };
  }

  return state;
};

export default noteReducer;
