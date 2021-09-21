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