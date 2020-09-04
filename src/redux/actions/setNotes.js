export const fetchNotes = (id = '') => (dispatch) => {
    let url = `https://cors-anywhere.herokuapp.com/https://notesttestapplication.herokuapp.com/notes/${id}`
    dispatch(setLoaded(false))
    fetch(url).then(res => res.json()).then(res => {
        dispatch(setNotes(res))
    });

};

export const editNotes = (id = '', notesBodyValue) => (dispatch) => {
    dispatch(setLoaded(false))
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(notesBodyValue);

    let url = `https://cors-anywhere.herokuapp.com/https://notesttestapplication.herokuapp.com/notes/${id}`
    let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            dispatch(editNote(result))
        })
        .catch(error => console.log('error', error));

};


export const addNotes = (notesBodyValue) => (dispatch) => {
    dispatch(setLoaded(false))
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(notesBodyValue);

    let url = `https://cors-anywhere.herokuapp.com/https://notesttestapplication.herokuapp.com/notes/`
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            dispatch(addNote(result))
        })
        .catch(error => console.log('error', error));

};


export const deleteNotes = (id) => (dispatch) => {
    dispatch(setLoaded(false))
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    let url = `https://cors-anywhere.herokuapp.com/https://notesttestapplication.herokuapp.com/notes/${id}`
    let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            dispatch(deleteNote(result))
        })
        .catch(error => console.log('error', error));

};



export const deleteNote = note => ({
    type: 'DELETE_NOTES',
    payload: note
})

export const setNotes = notes => ({
    type: 'SET_NOTES',
    payload: notes
});

export const addNote = note => ({
    type: 'ADD_NOTES',
    payload: note
});

export const editNote = payload => ({
    type: 'EDIT_NOTE',
    payload
});


export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload
});
