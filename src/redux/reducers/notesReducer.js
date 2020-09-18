const initState = {
  notesList: [],
  isLoaded: false,
  selectedNotes: [],
};

const notes = (state = initState, action) => {
  switch (action.type) {
    case "SET_NOTES":
      return {
        ...state,
        notesList: action.payload,
        isLoaded: true,
      };

    case "ADD_NOTES":
      return {
        ...state,
        notesList: [...state.notesList, action.payload],
        isLoaded: true,
      };

    case "EDIT_NOTE":
      const noteForEdit = action.payload;
      return {
        ...state,
        notesList: state.notesList.map((note) => {
          if (note.id === noteForEdit.id) {
            return noteForEdit;
          }
          return note;
        }),
        isLoaded: true,
      };

    case "DELETE_NOTES":
      return {
        ...state,
        notesList: state.notesList.filter((note) => {
          if (note.id !== action.payload.id) {
            return action.payload;
          }
        }),
        selectedNotes: state.selectedNotes.filter((note) => {
          if (note.id !== action.payload.id) {
            return action.payload;
          }
        }),
        isLoaded: true,
      };

    case "SELECT_NOTE":
      let selectedNotesCopy = [...state.selectedNotes];
      for (let note of state.notesList) {
        if (note.id === action.payload) {
          selectedNotesCopy.push(note);
        }
      }
      return {
        ...state,
        selectedNotes: [...selectedNotesCopy],
      };

    case "CLEAR_NOTE_SELECTION":
      let selectedNotesCopy2 = [...state.selectedNotes];
      for (let note of state.notesList) {
        if (note.id === action.payload) {
          selectedNotesCopy2 = selectedNotesCopy2.filter((_note) => {
            if (_note.id !== action.payload) {
              return _note;
            }
          });
        }
      }
      return {
        ...state,
        selectedNotes: [...selectedNotesCopy2],
      };

    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};
export default notes;
