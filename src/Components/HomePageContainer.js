
import { Route } from 'react-router-dom'
import AllDiscussionsContainer from './Discussions/AllDiscussionsContainer'
import LoginSignupContainer from './Auth/LoginSignupContainer'
import ProfileContainer from './Profile/ProfileContainer'
import NavBar from './NavBar'

function HomePageContainer() {


    return (
        <div>
            <Route>
                <AllDiscussionsContainer />
            </Route>
            <Route>
                <LoginSignupContainer />
            </Route>
            <Route>
                <ProfileContainer />
            </Route>
            <Route>
                <NavBar />
            </Route>      
        </div>
    )
}

export default HomePageContainer