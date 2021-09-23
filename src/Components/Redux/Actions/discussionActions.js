

//fetch for all discussions
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

    return {
        type: "REMOVE_COMMENT",
        payload: discussion
    }
}