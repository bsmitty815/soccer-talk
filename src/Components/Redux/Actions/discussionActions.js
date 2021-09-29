

export const fetchDiscussions = (pageNumber) => {
    return (dispatch) => {
        dispatch(loadingDiscussions())
        fetch("/discussions" + "?q=" + pageNumber)
        .then((response) => response.json())
        .then((data) => {
            dispatch(setDiscussions(data))
        })
    }
}


export const loadingDiscussions = () => {
    return ({
        type: "LOADING_DISCUSSIONS"
    })
}

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