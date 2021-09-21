
const initialState = {discussions: []}

export default function reducer(state = initialState, action) {
    // make a copy of current state
    // perform changes to state depending on the action type/payload
    // return updated state
    switch(action.type) {
        case "SET_DISCUSSIONS":
            //return new state with all discussions
            return {...state, discussions: action.payload};

        case "REMOVE_DISCUSSION":
            //delete discussion
            return {...state, discussions: state.discussions.filter(discussion => discussion.id != action.payload)}
        case "ADD_DISCUSSION":
            //add discussion
            return {...state, discussions: [...state.discussions, action.payload]};

        default:
    }

    return state;

}