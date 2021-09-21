
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeDiscussion } from '../Redux/Actions/removeDiscussionActions';


function IndividualDiscussion() {
    const { id } = useParams();
    const discussions = useSelector(state => state.discussions)
    const dispatch = useDispatch()

    function handleDelete(){
        dispatch(removeDiscussion(id))
    }

    const discussionFound = discussions.filter(discussion => discussion.id == id)
    const displayDiscussion = discussionFound.map((data) => {
        return <div key={data.id}><h1>{data.title}</h1><p>{data.body}</p><button onClick={handleDelete}>Delete</button></div>
    })

    //set up comments container seperately

   

    return (
        <div>
            <h1>Individual Discussion</h1>
            {displayDiscussion}
        </div>
    )
}

export default IndividualDiscussion