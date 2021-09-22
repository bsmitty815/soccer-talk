
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../Redux/Actions/discussionActions'


function CreateComment({discussion, handleShowCreateComment}) {
    const [commentInput, setCommentInput] = useState("")
    const dispatch = useDispatch()
    console.log(discussion, "comments create")



    function handleOnSubmit(e) {
        e.preventDefault()
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
                r.json().then((data) => dispatch(addComment(data))) //sending back the discussion plus comments
                handleShowCreateComment()
            } else {
                r.json().then((err) => console.log(err))
            }
        })

        
    }


    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <div className="ui form">
                <div className="field">
                    <label>Text</label>
                    <textarea className="comment-input" value={commentInput} onChange={(e) => setCommentInput(e.target.value)}></textarea>
                </div>
                </div>
                <button className="ui button" >Submit</button>
            </form>
        </div>       
    )
}

export default CreateComment