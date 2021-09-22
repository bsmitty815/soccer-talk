
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeDiscussion } from '../Redux/Actions/discussionActions';
import CommentsContainer from './CommentsContainer'



function IndividualDiscussion() {
    const { id } = useParams();
    const discussions = useSelector(state => state.discussions)
    const dispatch = useDispatch()
    const history = useHistory()
    
    function handleDelete(){
        

        fetch(`${id}`, {
            method: "DELETE",
        })
        .then((r) => {
            console.log(r)
            dispatch(removeDiscussion(id))
            history.push('/')
        })
        
    }

    const discussionFound = discussions.filter(discussion => discussion.id == id)
    const displayDiscussion = discussionFound.map((data) => {
        return <div key={data.id}><div><h1>{data.title}</h1><p>{data.body}</p><button className="ui button"  onClick={handleDelete}>Delete</button></div><CommentsContainer discussion={data} comments={data.comments}/><div></div></div>
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