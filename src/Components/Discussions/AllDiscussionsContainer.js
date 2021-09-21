
import { useEffect } from 'react'

function AllDiscussionsContainer() {

    useEffect(() => {
        fetch('/discussions')
        .then(response => response.json())
        .then(data => console.log(data))
    }, [])


    return (
        <div>
            <h1>All Discussions</h1>
        </div>
    )
}

export default AllDiscussionsContainer