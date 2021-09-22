
import { useState } from 'react'

function CreateComment({discussion, handleShowCreateComment}) {
    const [commentInput, setCommentInput] = useState("")



    function handleOnSubmit(e) {
        e.preventDefault()


        handleShowCreateComment()
    }


    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <div class="ui form">
                <div class="field">
                    <label>Text</label>
                    <textarea name="comment-input" value={commentInput} onChange={(e) => setCommentInput(e.target.value)}></textarea>
                </div>
                </div>
                <button>Submit</button>
            </form>
        </div>       
    )
}

export default CreateComment