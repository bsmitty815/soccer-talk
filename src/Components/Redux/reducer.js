
const initialState = {discussions: []}

export default function reducer(state = initialState, action) {
    // make a copy of current state
    // perform changes to state depending on the action type/payload
    // return updated state
    switch(action.type) {
        case "SET_DISCUSSIONS":
        //return new state with all discussions
            return {...state, discussions: action.payload};

        //case "REMOVE_DISCUSSION":

        case "ADD_DISCUSSION":
            return {...state, discusions: action.payload};

        default:
    }

    return state;

}