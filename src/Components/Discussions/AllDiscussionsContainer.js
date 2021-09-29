
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
    


    if (!discussions) return <Loading />


    //filter through data depending on what is in the search bar
    const filteredDiscussionsData = discussions.filter((data) => { 
        if (searchTerm === "") {
            return data
        } else {
            return data.title.toLowerCase().includes(searchTerm.toLowerCase()) || data.body.toLowerCase().includes(searchTerm.toLowerCase())
        }
    })
 

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
            <div>
            
            </div>
        </div>

    )
}

export default AllDiscussionsContainer