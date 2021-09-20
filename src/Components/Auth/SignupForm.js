
import { useState } from 'react'

function SignupForm({setUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")


    //handle signup
    function handleSubmit(e) {
        e.preventDefault()
        fetch('/signup', {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({user: {
                username,
                password,
                password_confirmation: passwordConfirmation
            }
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
            } else {
                r.json().then((err) => console.log(err))
            }
        })

    }


    
    return (
        <div>
            <h1>Signup</h1>
            <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" id="signup-username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="field">
                <label>Password</label>
                <input type="password" name="password" id="signup-password"  placeholder="Password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="field">
                <label>Confirm Password</label>
                <input type="password" name="confirm-password" id="password_confirmation" placeholder="Confirm Password" autoComplete="on" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
            </div>
            <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignupForm