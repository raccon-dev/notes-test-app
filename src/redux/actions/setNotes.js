export const fetchNotes = (id) => (dispatch) => {

    dispatch(setLoaded(false))
    fetch(`https://notesttestapplication.herokuapp.com/notes/${id ? id : ''}`).then(res => res.json()).then(res => {
        dispatch(setNotes(res))
    });

};


export const setNotes = notes => ({
    type: 'SET_NOTES',
    payload: notes
});


export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload
});
