
import { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { fetchDiscussions, resetAllLoaded } from '../Redux/Actions/discussionActions'


function AllDiscussionsContainer({searchTerm}) {
    const discussions = useSelector(state => state.discussions)
    const dispatch = useDispatch()
    const pageNumber = useSelector(state => state.pageNumber)
    const allLoaded = useSelector(state => state.allLoaded)
    const loading = useSelector(state => state.loading)
    

   //useEffect to get more discussions
    useEffect(() => {

       if(pageNumber === 0) dispatch(fetchDiscussions(pageNumber))

    }, [pageNumber, dispatch, discussions]);

    //checking if the page is fully rendered
    const isBottom = (el) => {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    //track the page scrolling
    const trackScrolling = useCallback(() => {
        const display = document.getElementById("discussions-display")
        //checking if the element is at the botoom and is not loading
        if (isBottom(display) && !loading ) {
            fetchDiscussions(pageNumber)(dispatch)
        }
    },[pageNumber, dispatch, loading])

    //useEffect is tracking the scrolling
    useEffect(() => {
        if (!allLoaded) document.addEventListener('scroll', trackScrolling);
        //once allLoaded removes the event listener
        return () => {
            document.removeEventListener('scroll', trackScrolling)
        };
    },[trackScrolling, allLoaded, dispatch])

    //resets the value of allLoaded
    useEffect(() => {
        return () => dispatch(resetAllLoaded())
    }, [dispatch])
    


    if (!discussions) return <Loading />


    //filter through data depending on what is in the search bar
    const filteredDiscussionsData = discussions.filter((data) => { 
        if (searchTerm === "") {
            return data
        } else {
            return data.title.toLowerCase().includes(searchTerm.toLowerCase()) || data.body.toLowerCase().includes(searchTerm.toLowerCase())
        }
    })
 
    //creates the discussions display on the screen
    const discussionDisplay = filteredDiscussionsData.sort((a,b) => b.id - a.id).map((discussion) => {
        return <div className="discussion-container" key={discussion.id} id={discussion.id} >
            <h1><Link to={`/discussions/${discussion.id}`}>{discussion.title}</Link></h1>
            <p>{discussion.summary}</p>
            <p>Created on: {discussion.created_at}</p>
            </div>
    }) 
    
    return (
        <div>
            <div id="discussions-display">
                {discussionDisplay}
                
                {loading && <Loading />}
                {allLoaded ? "" : <p>Scroll For More</p>}
            </div>

        </div>

    )
}

export default AllDiscussionsContainer