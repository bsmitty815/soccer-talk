
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setDiscussions } from '../Redux/Actions/discussionActions'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { fetchDiscussions } from '../Redux/reducer'


function AllDiscussionsContainer() {
    const discussions = useSelector(state => state.discussions)
    const dispatch = useDispatch()
    //console.log(discussions, "state")
    console.log(discussions)

    // useEffect(() => {
    //     fetch('/discussions')
    //     .then(response => response.json())
    //     .then(data => dispatch(setDiscussions(data)))
    // }, [])

    useEffect(() => {

            dispatch(fetchDiscussions());

    }, [dispatch]);


    if (!discussions) return <Loading />

    const discussionDisplay = discussions.map((discussion) => {
        return <div key={discussion.id} id={discussion.id} ><h1><Link to={`/discussions/${discussion.id}`}>{discussion.title}</Link></h1><p>{discussion.summary}</p></div>
    })

    
    return (
        <div>
            <h1>All Discussions</h1>
            {discussionDisplay}
        </div>
    )
}

export default AllDiscussionsContainer