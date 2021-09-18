
import { useState } from 'react'

function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit() {
        fetch("/login", {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUsername(user))
                setUsername("")
                setPassword("")
            } else {
                r.json().then((err) => setErrors(err.error))
            }
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="field">
                <label>Password</label>
                <input type="text" name="password" placeholder="Password" value={password} onchange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm