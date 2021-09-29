
import { useState } from 'react'

function LoginForm({setUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    //handle login
    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
                setUsername("")
                setPassword("")
            } else {
                r.json().then((err) => setErrors(err.error))
            }
        })
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="field">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" id="password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p key ={errors}>{errors}</p>
            <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm