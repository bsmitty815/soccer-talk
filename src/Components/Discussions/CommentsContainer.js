
import CreateComment from './CreateComment'
import { useState } from 'react'

function CommentsContainer({discussion, comments}) {
    console.log(comments)
    console.log(discussion)
    const [showCreateComment, setShowCreateComment] = useState(false)


    function handleShowCreateComment() {
        setShowCreateComment((showCreateComment) => !showCreateComment)
    }
    return (
        <div>
            <div>
                {(showCreateComment) ? <button onClick={handleShowCreateComment}>Create Comment</button> : null }
                {(showCreateComment) ? null : <CreateComment /> }
            </div>
        </div>
    )

}

export default CommentsContainer