
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

function CreateDiscussion() {

    const history = useHistory()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        console.log("form clicked")
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
                r.json().then((discussion) => console.log(discussion, "returned discussion"))
                //history.push('/')
            } else {
                r.json().then((err) => console.log(err))
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="ui form">
                <div className="field">
                    <label>Title</label>
                    <textarea rows="2" name="title" value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
                </div>
                <div className="field">
                    <label>Body</label>
                    <textarea name="body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>

                </div>
                <button className="ui button" >Submit</button>
            </form>
        </div>
    )
}

export default CreateDiscussion