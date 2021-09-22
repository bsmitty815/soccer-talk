
import { setDiscussions } from '../Redux/Actions/discussionActions'






export function fetchDiscussions() {
    
    return function (dispatch) {
        dispatch({ type: "discussions/discussionsLoading"})
        fetch("/discussions")
        .then((response) => response.json())
        .then((data) => {
            //console.log(data, "fetch reducer")
            dispatch(setDiscussions(data))
        })
    }
}

const initialState = {discussions: [], status: "idle"}

export default function reducer(state = initialState, action) {
    // make a copy of current state
    // perform changes to state depending on the action type/payload
    // return updated state
    switch(action.type) {

        case "discussions/discussionsLoading":
            return {
                ...state,
                status: "loading",
            };
        case "discussions/discussionsLoaded":
            return {
                ...state,
                entities: action.payload,
                status: "idle",
            };
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