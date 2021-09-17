
import { Route } from 'react-router-dom'
import AllDiscussionsContainer from './Discussions/AllDiscussionsContainer'
import LoginSignupContainer from './Auth/LoginSignupContainer'
import ProfileContainer from './Profile/ProfileContainer'
import NavBar from './NavBar'

function HomePageContainer() {


    return (
        <div className="home-page-container">
            <div className="home-page-left-container">
            <Route>
                <AllDiscussionsContainer />
            </Route>
            </div>

            <div className="home-page-right-container">
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

             
        </div>
    )
}

export default HomePageContainer