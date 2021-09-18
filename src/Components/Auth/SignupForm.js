

function SignupForm() {


    return (
        <div>
            <h1>Signup</h1>
            <form className="ui form">
            <div className="field">
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="field">
                <label>Password</label>
                <input type="text" name="password" placeholder="Password" />
            </div>
            <div className="field">
                <label>Confirm Password</label>
                <input type="text" name="confirm-password" placeholder="Confirm Password" />
            </div>
            <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignupForm