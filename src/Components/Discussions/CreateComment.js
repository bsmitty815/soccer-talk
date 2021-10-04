
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../Redux/Actions/discussionActions'


function CreateComment({discussion, handleShowCreateComment, updateFetchedDiscussion}) {
    const [commentInput, setCommentInput] = useState("")
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])
    


    //creates the comment
    function handleOnSubmit(e) {
        e.preventDefault()
        setErrors([])
        fetch('/comments', {
            method: 'POST',
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                body: commentInput,
                discussion_id: discussion,
            })
        }).then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    dispatch(addComment(data))
                    updateFetchedDiscussion(data)
                
                }) //sending back the discussion plus comments
                handleShowCreateComment()
                
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }
    //shows or hides the comment container
    function handleCloseCommentContainer(){
        handleShowCreateComment()
    }

    return (
        <div className="create-comment-container">
            <h3 onClick={handleCloseCommentContainer}>x</h3>
            <form onSubmit={handleOnSubmit}>
                <div className="ui form">
                <div className="field">
                    <label>Text:</label>
                    <textarea className="comment-input" value={commentInput} onChange={(e) => setCommentInput(e.target.value)}></textarea>
                </div>
                <div className="create-comment-container-div-space"></div>
                </div>
                <p>{errors}</p>
                <button className="ui button" >Submit</button>
            </form>
        </div>       
    )
}

export default CreateComment