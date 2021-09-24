
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { fetchDiscussions } from '../Redux/Actions/discussionActions'


function AllDiscussionsContainer() {
    const discussions = useSelector(state => state.discussions)
    const dispatch = useDispatch()
    const [discussionCount, setDiscussionCount] = useState(2)
    console.log(discussions)
    useEffect(() => {

            dispatch(fetchDiscussions());

    }, [dispatch]);


    if (!discussions) return <Loading />

    function handleClick() {
        setDiscussionCount(discussionCount + 4)
    }

    
    const discussionDisplay = discussions.sort((a,b) => b.id - a.id).slice(0, discussionCount).map((discussion) => {
        return <div className="discussion-container" key={discussion.id} id={discussion.id} ><h1><Link to={`/discussions/${discussion.id}`}>{discussion.title}</Link></h1><p>{discussion.summary}</p><p>Updated on - {discussion.updated_at}</p></div>
    })

    
    return (
        <div>
            <h1>All Discussions</h1>
            {discussionDisplay}
            <button className="ui button" onClick={handleClick}>Load More</button>
        </div>
    )
}

export default AllDiscussionsContainer