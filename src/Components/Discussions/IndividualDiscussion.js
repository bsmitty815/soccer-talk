
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearState } from '../Redux/Actions/discussionActions';
import CommentsContainer from './CommentsContainer'
import { useState, useEffect } from 'react'
import Loading from '../Loading/Loading'


function IndividualDiscussion({user}) {
    const { id } = useParams();
    const dispatch = useDispatch()
    const history = useHistory()
    const [discussionFetched, setDiscussionFetched] = useState([])

    //use useffect
    useEffect(() => {
        fetch(`/discussions/${id}`).then((r) => {
            if (r.ok) {
                r.json().then((discussions) => setDiscussionFetched(discussions))
            }
        })
    }, [id])
    //delete discussion container
    function handleDelete(){
        fetch(`discussions/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            dispatch(clearState())
            history.push('/DiscussionDeleted')
        })  
    }


    if(discussionFetched.length === 0) return <Loading />


    return (
        <div>
            <div key={discussionFetched.id} className="whole-discussion-container" >
            <div className="individual-discussion-container">
                <h1>{discussionFetched.title}</h1>
                <p>{discussionFetched.body}</p>
                <div className="individual-discussion-container-div-space"></div>
                
                {!user ? "" : user.id === discussionFetched.user_id ? <button className="ui button"  onClick={handleDelete}>Delete Discussion</button> : ""}
                {/*user.id === discussionFetched.user_id ? <button className="ui button"  onClick={handleDelete}>Delete Discussion</button> : ""*/}
                <div className="individual-discussion-container-div-space"></div>
                </div><CommentsContainer discussion={discussionFetched} comments={discussionFetched.comments} user={user} updateFetchedDiscussion={setDiscussionFetched} /><div>
            </div>
            </div>
        </div>
    )
}

export default IndividualDiscussion