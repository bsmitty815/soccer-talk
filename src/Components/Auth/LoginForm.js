

function LoginForm() {


    return (
        <div>
            <h1>Login</h1>
            <form className="ui form">
            <div className="field">
                <label>First Name</label>
                <input type="text" name="first-name" placeholder="First Name" />
            </div>
            <div className="field">
                <label>Last Name</label>
                <input type="text" name="last-name" placeholder="Last Name" />
            </div>
            <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm