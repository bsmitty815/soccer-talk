
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setDiscussions } from '../Redux/Actions/discussionActions'


function AllDiscussionsContainer() {
    const discussions = useSelector(state => state.discussions)
    const dispatch = useDispatch()
    console.log(discussions, "state")

    useEffect(() => {
        fetch('/discussions')
        .then(response => response.json())
        .then(data => dispatch(setDiscussions(data)))
    }, [])


    const discussionDisplay = discussions.map((discussion) => {
        return <div key={discussion.id} id={discussion.id}><h1>{discussion.title}</h1><p>{discussion.summary}</p></div>
    })

    console.log(discussionDisplay)
    return (
        <div>
            <h1>All Discussions</h1>
            {discussionDisplay}
        </div>
    )
}

export default AllDiscussionsContainer