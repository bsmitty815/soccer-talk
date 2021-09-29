
import CreateComment from './CreateComment'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeComment } from '../Redux/Actions/discussionActions'


function CommentsContainer({discussion, comments, user}) {

    const [showCreateComment, setShowCreateComment] = useState(true)
    const dispatch= useDispatch()
   
    //toggle create comment bar
    function handleShowCreateComment() {
        setShowCreateComment((showCreateComment) => !showCreateComment)
    }

    //delete comment
    function handleDelete(commentId) {
        fetch(`comments/${commentId}`, {
            method: "DELETE",
        })
        .then((r) => {
            r.json().then((data) => dispatch(removeComment(data)))   
        })
    }

    //comments display render
    const commentsDisplay = comments.map((commentData) => {
        return <div className="ui feed" key={commentData.id} className="comments-container" >
            <h4 className="summary">Username: {commentData.user.username} | Created on: {commentData.created_at}</h4>
            <div className="extra text">{commentData.body}</div>
            <div className="comment-container-div-space"></div>
            { user.id === commentData.user.id ? <div><button className="ui button" onClick={() => handleDelete(commentData.id)}>Delete Comment</button></div> : "" }
            <div className="comment-container-div-space"></div>
            </div>
    })

    return (
        <div>
            <div>
                {commentsDisplay}
            </div>
            <div>
                {(showCreateComment) ? <button className="ui button"  onClick={handleShowCreateComment}>Create Comment</button> : null }
                {(showCreateComment) ? null : <CreateComment discussion={discussion.id} handleShowCreateComment={handleShowCreateComment} /> }
            </div>
        </div>
    )

}

export default CommentsContainer