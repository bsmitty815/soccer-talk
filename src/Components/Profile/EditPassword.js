

function EditPassword() {


    return (
        <div>
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

export default EditPassword