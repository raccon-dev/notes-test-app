const initState = {
    notesList: [],
    isLoaded: false
};


const notes = (state = initState, action) => {

    switch (action.type) {

        case 'SET_NOTES':
            return {
                ...state,
                notesList: action.payload,
                isLoaded: true
            }

        case 'ADD_NOTES':

            return {
                ...state,
                notesList: [
                    ...state.notesList, JSON.parse(action.payload)

                ],
                isLoaded: true
            }

        case 'EDIT_NOTE':
            const noteForEdit = JSON.parse(action.payload);
            return {

                ...state,
                notesList: state.notesList.map(note => {
                    if (note.id === noteForEdit.id) {
                        return noteForEdit;
                    }

                    return note;
                }),
                isLoaded: true
            }

        case 'DELETE_NOTES':
            const noteForDelete = JSON.parse(action.payload)
            return {
                ...state,
                notesList: state.notesList.filter(note => {
                    if (note.id !== noteForDelete.id) {
                        return noteForDelete;
                    }
                })
            }


        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }

        default:
            return state;
    }

}
export default notes