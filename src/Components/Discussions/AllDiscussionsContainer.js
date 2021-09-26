
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { fetchDiscussions } from '../Redux/Actions/discussionActions'


function AllDiscussionsContainer({searchTerm}) {
    const discussions = useSelector(state => state.discussions)
    const dispatch = useDispatch()
    const [discussionCount, setDiscussionCount] = useState(6)
    console.log(discussions)

    useEffect(() => {

            dispatch(fetchDiscussions());

    }, [dispatch]);


    if (!discussions) return <Loading />

    function handleClick() {
        setDiscussionCount(discussionCount + 2)
    }
    //

    //  function handleScroll(e){
    //      console.log(e)
    //     let element = e.target
    //     if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    //       // do something at end of scroll
    //       console.log("bottom")
    //     }
    // } className="content-container" onScroll={handleScroll}

    //

    const filteredDiscussionsData = discussions.filter((data) => data.title.toLowerCase().includes(searchTerm.toLowerCase) || data.body.toLowerCase().includes(searchTerm.toLowerCase))
    const discussionDisplay = filteredDiscussionsData.sort((a,b) => b.id - a.id).slice(0, discussionCount).map((discussion) => {
        return <div className="discussion-container" key={discussion.id} id={discussion.id} ><h1><Link to={`/discussions/${discussion.id}`}>{discussion.title}</Link></h1><p>{discussion.summary}</p><p>Created on - {discussion.created_at}</p></div>
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