const initState = {
    notes: [],
    isLoaded: false
};


const notes = (state = initState, action) => {

    switch (action.type) {

        case 'SET_NOTES':
            return {
                ...state,
                notes: action.payload,
                isLoaded: true
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