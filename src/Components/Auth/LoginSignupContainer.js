

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

function LoginSignupContainer({setUser}) {


    return (
        <div>
            <LoginForm setUser={setUser} />
            <SignupForm setUser={setUser}/>
        </div>
    )
}

export default LoginSignupContainer