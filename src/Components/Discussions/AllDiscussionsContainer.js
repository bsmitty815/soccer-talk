
import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { fetchDiscussions, resetAllLoaded } from '../Redux/Actions/discussionActions'


function AllDiscussionsContainer({searchTerm}) {
    const discussions = useSelector(state => state.discussions)
    const dispatch = useDispatch()
    const [discussionCount, setDiscussionCount] = useState(6)

    //
    //const pageNumber = useSelector(state => state.discussions.pageNumber)
    //const pageNumber = useSelector(state => state.discussions[state.discussions.filter+"PageNumber"])
    //const allLoaded = useSelector(state => state.discussions[state.discussions.allLoaded])
    //const loading = useSelector(state => state.discussions[state.discussions.loading])
    const pageNumber = useSelector(state => state.pageNumber)
    const allLoaded = useSelector(state => state.allLoaded)
    const loading = useSelector(state => state.loading)

    console.log(discussions, "discussions")
    useEffect(() => {
        console.log("use effect fetch discussions")
       //if(pageNumber === 0) fetchDiscussions(pageNumber)(dispatch)
       if(pageNumber === 0) dispatch(fetchDiscussions(pageNumber))
       //dispatch(fetchDiscussions(pageNumber))

    }, [pageNumber, dispatch, discussions]);

    const isBottom = (el) => {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    const trackScrolling = useCallback(() => {
        const el = document.getElementById("discussions-display")
        if (isBottom(el) && !loading ) {
            fetchDiscussions(pageNumber)(dispatch)
        }
    },[pageNumber, dispatch, loading])

    useEffect(() => {
        if (!allLoaded) document.addEventListener('scroll', trackScrolling);
        return () => {
            document.removeEventListener('scroll', trackScrolling)
        };
    },[trackScrolling, allLoaded, dispatch])

    useEffect(() => {
        return () => dispatch(resetAllLoaded())
    }, [dispatch])
    
    //
    // useEffect(() => {

    //         dispatch(fetchDiscussions());

    // }, [dispatch]);


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
    // const discussionDisplay = filteredDiscussionsData.sort((a,b) => b.id - a.id).slice(0, discussionCount).map((discussion) => {
    //     return <div className="discussion-container" key={discussion.id} id={discussion.id} ><h1><Link to={`/discussions/${discussion.id}`}>{discussion.title}</Link></h1><p>{discussion.summary}</p><p>Created on - {discussion.created_at}</p></div>
    // })   

    const discussionDisplay = filteredDiscussionsData.sort((a,b) => b.id - a.id).map((discussion) => {
        return <div className="discussion-container" key={discussion.id} id={discussion.id} ><h1><Link to={`/discussions/${discussion.id}`}>{discussion.title}</Link></h1><p>{discussion.summary}</p><p>Created on - {discussion.created_at}</p></div>
    }) 
    
    return (
        <div id="discussions-display">
            {discussionDisplay}
            {loading && <Loading />}
            {/*

<div>{ discussions.length >= discussionCount - 6 ? <button className="ui button" onClick={handleClick}>Load More</button> : ""}</div>
            */}
            
        </div>
    )
}

export default AllDiscussionsContainer