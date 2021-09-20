
import { useState } from 'react'

function EditPassword() {
    const [oldPassword, setOldPassword] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

        //handle edit password
        function handleSubmit(e) {
            e.preventDefault()
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
    
            })
    
        }


    return (
        <div>
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
            <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditPassword