
import CreateComment from './CreateComment'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeComment } from '../Redux/Actions/discussionActions'


function CommentsContainer({discussion, comments}) {
    //console.log(comments, "comments discussion container")
    //console.log(discussion, "discussion")
    const [showCreateComment, setShowCreateComment] = useState(true)
    const dispatch= useDispatch()


    function handleShowCreateComment() {
        setShowCreateComment((showCreateComment) => !showCreateComment)
    }

    function handleDelete(commentId, discussionId) {
        console.log(commentId, discussionId)
        fetch(`comments/${commentId}`, {
            method: "DELETE",
        })
        .then((r) => {
            console.log(r)
            r.json().then((data) => console.log(data, "comment destroyed"))
            //dispatch(removeComment(id))
            //history.push('/')
        })
    }

    const commentsDisplay = comments.map((commentData) => {
        return <div key={commentData.id}><div>{commentData.body}</div><div><button onClick={() => handleDelete(commentData.id, discussion.id)}>Delete Comment</button></div></div>
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