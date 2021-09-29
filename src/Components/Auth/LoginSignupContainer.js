

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

function LoginSignupContainer({setUser}) {


    return (
        <div className="login-signup-container">
            <LoginForm setUser={setUser} />
            <SignupForm setUser={setUser}/>
        </div>
    )
}

export default LoginSignupContainer