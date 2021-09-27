
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { fetchDiscussions } from '../Redux/Actions/discussionActions'


function AllDiscussionsContainer({searchTerm}) {
    const discussions = useSelector(state => state.discussions)
    const dispatch = useDispatch()
    const [discussionCount, setDiscussionCount] = useState(6)
    //console.log(discussions)

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

    //filter through data depending on what is in the search bar
    const filteredDiscussionsData = discussions.filter((data) => { 
        if (searchTerm === "") {
            return data
        } else {
            return data.title.toLowerCase().includes(searchTerm.toLowerCase()) || data.body.toLowerCase().includes(searchTerm.toLowerCase())
        }
    })
    //sort the data and put it on the page
    const discussionDisplay = filteredDiscussionsData.sort((a,b) => b.id - a.id).slice(0, discussionCount).map((discussion) => {
        return <div className="discussion-container" key={discussion.id} id={discussion.id} ><h1><Link to={`/discussions/${discussion.id}`}>{discussion.title}</Link></h1><p>{discussion.summary}</p><p>Created on - {discussion.created_at}</p></div>
    })
    console.log(filteredDiscussionsData)
    
    
    return (
        <div>
            {discussionDisplay}
            <button className="ui button" onClick={handleClick}>Load More</button>
            <div>{ discussions.length === discussionCount ? "" : <button className="ui button" onClick={handleClick}>Load More turnary</button>}</div>
        </div>
    )
}

export default AllDiscussionsContainer