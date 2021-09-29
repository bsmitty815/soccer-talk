
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeDiscussion } from '../Redux/Actions/discussionActions';
import CommentsContainer from './CommentsContainer'



function IndividualDiscussion({user}) {
    const { id } = useParams();
    const discussions = useSelector(state => state.discussions)
    const dispatch = useDispatch()
    const history = useHistory()

    //delete discussion container
    function handleDelete(){
        fetch(`discussions/${id}`, {
            method: "DELETE",
        })
        .then((r) => {
            console.log(r)
            dispatch(removeDiscussion(id))
            history.push('/')
        })  
    }


    //find specific discussion with useParams id
    const discussionFound = discussions.filter(discussion => discussion.id === parseInt(id))
    //discussion display function
    const displayDiscussion = discussionFound.map((data) => {
        return <div key={data.id} className="individual-discussion-container" ><div>
                <h1>{data.title}</h1>
                <p>{data.body}</p>
                <div className="individual-discussion-container-div-space"></div>
                {user.id === data.user_id ? <button className="ui button"  onClick={handleDelete}>Delete Discussion</button> : ""}
                <div className="individual-discussion-container-div-space"></div>
                </div><CommentsContainer discussion={data} comments={data.comments} user={user}/><div>
            </div>
            
            </div>
    })

    

   

    return (
        <div>
            <h1>Individual Discussion</h1>
            {displayDiscussion}
        </div>
    )
}

export default IndividualDiscussion