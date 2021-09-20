
import { useHistory } from 'react-router-dom'
import { useState} from 'react'

function CreateDiscussion() {

    const history = useHistory()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    return (
        <div>
            <form>
                <div className="ui form">
                <div className="field">
                    <label>Title</label>
                    <textarea rows="2"></textarea>
                </div>
                <div className="field">
                    <label>Body</label>
                    <textarea></textarea>
                </div>

                </div>
                <button className="ui button" >Submit</button>
            </form>
        </div>
    )
}

export default CreateDiscussion