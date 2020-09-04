export const notesHandler = (id, requestMethod, notesBodyValue) => (dispatch) => {
    dispatch(setLoaded(false))
    var myHeaders = new Headers();
    var raw = JSON.stringify(notesBodyValue);
    myHeaders.append("Content-Type", "application/json");

    let url = `https://cors-anywhere.herokuapp.com/https://notesttestapplication.herokuapp.com/notes/${id}`
    let requestOptions = {
        method: requestMethod,
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    if (requestMethod === 'GET') {
        requestOptions = {
            method: requestMethod,
        }
    }
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
            switch (requestMethod) {
                case 'DELETE':
                    dispatch(deleteNote(result))
                    break;
                case 'PUT':
                    dispatch(editNote(result))
                    break;
                case 'POST':
                    dispatch(addNote(result))
                    break;
                case 'GET':
                    dispatch(setNotes(result))
                    break;
                default:
                    break;
            }

        })
        .catch(error => console.log('error', error.message));

};


export const setNotes = payload => ({
    type: 'SET_NOTES',
    payload
});

export const addNote = payload => ({
    type: 'ADD_NOTES',
    payload
});

export const editNote = payload => ({
    type: 'EDIT_NOTE',
    payload
});

export const deleteNote = payload => ({
    type: 'DELETE_NOTES',
    payload
})

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload
});
