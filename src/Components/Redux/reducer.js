


//const initialState = {discussions: [], status: "idle"}
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

        // case "discussions/discussionsLoading":
        //     return {
        //         ...state,
        //         status: "loading",
        //     };
        case "LOADING_DISCUSSIONS":
            return {...state, loading: true}
        case "RESET_ALL_LOADED":
            return {...state, allLoaded: false}

        // case "discussions/discussionsLoaded":
        //     return {
        //         ...state,
        //         entities: action.payload,
        //         status: "idle",
        //     };



        // case "SET_DISCUSSIONS":
        //     //return new state with all discussions
        //     return {...state, discussions: action.payload};
        case "SET_DISCUSSIONS":
            //debugger
            //return new state with all discussions
            return {
                //pageNumber: pageNumber + 1,
                
                ...state,
                pageNumber: state.pageNumber + 1,
                //discussions: [state+"PageNumber"] + 1,
                //[state.filter+"PageNumber"]: state[state.filter+"PageNumber"] + 1,
                //discussions: [...state.pageNumber + 1],
                //discussions: [...state.pageNumber, ...state.pageNumber + 1],
                //[state.filter+"PageNumber"]: state[state.filter+"PageNumber"] + 1,
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
            //debugger

            //state.discussions.slice(foundIndex +1)
            // return {...state, discussions: [...state.discussions.slice(0, updatedDiscussion), 
            //         action.payload],
            //         ...state.discussions.slice(updatedDiscussion, state.discussions.length)
            //     };
            //return {...state, discussions: [...state.discussions.filter(data => data.id !== updatedDiscussion), action.payload]}
            return {...state, discussions: [...state.discussions.slice(0, foundIndex), action.payload, ...state.discussions.slice(foundIndex +1)]}

        case "REMOVE_COMMENT": {
            //remove comment
            //return {...state, discussions: state.discussions.filter(discussion => discussion.id !== action.payload)}
            // const updatedDiscussion = parseInt(action.payload.id)
            // const firstSetOfDiscussions = [...state.discussions.slice(0, updatedDiscussion)]
            // const secondSetOfDiscussions = [...state.discussions.slice(updatedDiscussion, +1)]
            // return {...state, discussions: [...firstSetOfDiscussions, action.payload, ...secondSetOfDiscussions]}
            const updatedDiscussion = parseInt(action.payload.id)
            const foundIndex = state.discussions.findIndex(x => x.id === updatedDiscussion)
            return {...state, discussions: [...state.discussions.slice(0, foundIndex), action.payload, ...state.discussions.slice(foundIndex +1)]}
        }
        default:
    }

    return state;

}