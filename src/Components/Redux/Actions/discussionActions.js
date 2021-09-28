

//fetch for all discussions
// export function fetchDiscussions() {
    
//     return function (dispatch) {
//         dispatch({ type: "discussions/discussionsLoading"})
//         fetch("/discussions")
//         .then((response) => response.json())
//         .then((data) => {
//             dispatch(setDiscussions(data))
//         })
//     }
// }
export const fetchDiscussions = (pageNumber) => {
       // debugger
    return (dispatch) => {
        dispatch(loadingDiscussions())
        fetch("/discussions" + "?q=" + pageNumber)
        //fetch("/discussions", {q: pageNumber})
        .then((response) => response.json())
        .then((data) => {
            //console.log(data, 'fetch', pageNumber)
            dispatch(setDiscussions(data))
        })
    }
}
//new loading discussions
export const loadingDiscussions = () => {
    return ({
        type: "LOADING_DISCUSSIONS"
    })
}
//reset loading to false
export const resetAllLoaded = () => {
    return ({
        type: "RESET_ALL_LOADED"
    })
}


export const setDiscussions = (discussions) => {

    return {
        type: "SET_DISCUSSIONS",
        payload: discussions
    }
    
}

export const addDiscussion = (discussion) => {

    return {
        type: "ADD_DISCUSSION",
        payload: discussion
    }
    
}

export const removeDiscussion = (id) => {

    return {
        type: "REMOVE_DISCUSSION",
        payload: id
    }
    
}

export const addComment = (discussion) => {
    //sent back the discussion with all the comments
    return {
        type: "ADD_COMMENT",
        payload: discussion
    }

}

export const removeComment = (discussion) => {
    //sent back the discussion with all the comments
    return {
        type: "REMOVE_COMMENT",
        payload: discussion
    }
}