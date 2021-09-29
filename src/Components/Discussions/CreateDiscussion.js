
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addDiscussion } from '../Redux/Actions/discussionActions'

function CreateDiscussion() {

    const history = useHistory()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const dispatch = useDispatch()


    function handleSubmit(e) {
        e.preventDefault()
        
        fetch('/discussions', {
            method: 'POST',
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                body,
            })
        }).then((r) => {
            if (r.ok) {
                r.json().then((discussion) => dispatch(addDiscussion(discussion)))
                history.push('/')
            } else {
                r.json().then((err) => console.log(err))
            }
        })
    }

    return (
        <div className="create-discussions-container">
            <form onSubmit={handleSubmit}>
                <div className="ui form">
                <div className="field">
                    <label>Title:</label>
                    <textarea rows="2" name="title" value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
                </div>
                <div className="field">
                    <label>Body:</label>
                    <textarea name="body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>

                </div>
                <div className="create-discussions-container-div-space"></div>
                <button className="ui button" >Submit</button>
            </form>
        </div>
    )
}

export default CreateDiscussion