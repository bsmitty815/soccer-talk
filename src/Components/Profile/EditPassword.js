
import { useState } from 'react'

function EditPassword({setUser}) {
    const [oldPassword, setOldPassword] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [messages, setMessages] = useState("")


        //handle edit password
        function handleSubmit(e) {
            e.preventDefault()
            setMessages("")
            fetch('/users/:id', {
                method: "PATCH",
                headers: {
                    "Accepts": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    oldPass: {
                        oldPassword,
                    },
                    user: { 
                        password,
                        password_confirmation: passwordConfirmation
                }
                }),
            }).then((r) => {
                if (r.ok) {
                    r.json().then((user) => setUser(user))
                    setMessages("Password Updated")
                } else {
                    r.json().then((data) => setMessages(data.message))
                }
            })
    
        }


    return (
        <div className="edit-password-container">
            <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label>Old Password</label>
                <input type="text" name="old-password" placeholder="Old Password" id="edit-old-password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
            </div>
            <div className="field">
                <label>Password</label>
                <input type="password" name="password" id="new-password"  placeholder="Password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="field">
                <label>Confirm Password</label>
                <input type="password" name="new-password" id="new-password_confirmation" placeholder="Confirm Password" autoComplete="on" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
            </div>
            <p>{messages}</p>
            <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditPassword