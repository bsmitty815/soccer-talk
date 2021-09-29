


const initialState = {
    discussions: [],
    allLoaded: false,
    loading: false,
    pageNumber: 0,
    status: "idle"
}

export default function reducer(state = initialState, action) {
    // make a copy of current state
    // perform changes to state depending on the action type/payload
    // return updated state
    switch(action.type) {

        case "LOADING_DISCUSSIONS":
            return {...state, loading: true}
        case "RESET_ALL_LOADED":
            return {...state, allLoaded: false}

        case "SET_DISCUSSIONS":
            //return new state with all discussions
            return {

                ...state,
                pageNumber: state.pageNumber + 1,
                discussions: [...state.discussions, ...action.payload],
                
                allLoaded: action.payload.length < 5 ? true : false,
                loading: false,
                show: {}
            };


        case "REMOVE_DISCUSSION":
            //delete discussion
            return {...state, discussions: state.discussions.filter(discussion => discussion.id !== action.payload)}

        case "ADD_DISCUSSION":
            //add discussion
            return {...state, discussions: [...state.discussions, action.payload]};
        
        case "ADD_COMMENT":
            //add comment
            //sent back the discussion plus the comments and updated that discussion
            const updatedDiscussion = parseInt(action.payload.id)
            const foundIndex = state.discussions.findIndex(x => x.id === updatedDiscussion)
            return {...state, discussions: [...state.discussions.slice(0, foundIndex), action.payload, ...state.discussions.slice(foundIndex +1)]}

        case "REMOVE_COMMENT": {
            //remove comment
            const updatedDiscussion = parseInt(action.payload.id)
            const foundIndex = state.discussions.findIndex(x => x.id === updatedDiscussion)
            return {...state, discussions: [...state.discussions.slice(0, foundIndex), action.payload, ...state.discussions.slice(foundIndex +1)]}
        }
        default:
    }

    return state;

}