
import { Route, Switch } from 'react-router-dom'
import AllDiscussionsContainer from './Discussions/AllDiscussionsContainer'
import LoginSignupContainer from './Auth/LoginSignupContainer'
import ProfileContainer from './Profile/ProfileContainer'
import NavBar from './NavBar'

function HomePageContainer({setUser, user}) {


    return (
        <div className="home-page-container">
            <div className="home-page-left-container">
            <Switch>
                <Route to="/Home">
                    <AllDiscussionsContainer />
                </Route>
                <Route to="/EditProfile">
                    <EditProfile />
                </Route>
                <Route to="/EditPasssword">
                    <EditPassword />
                </Route>
                <Route to="/CreateDiscussion">
                    <CreateDiscussion/>
                </Route>
                <Route to="/">
                    <AllDiscussionsContainer />
                </Route>
            </Switch>
            </div>

            <div className="home-page-right-container">
            <Route>
                {(user) ? null : <LoginSignupContainer setUser={setUser} /> }
            </Route>
            <Route>
                {(user) ? <ProfileContainer /> : null }
            </Route>
            <Route>
                {(user) ? <NavBar setUser={setUser} /> : null }
            </Route>
            </div>

             
        </div>
    )
}

export default HomePageContainer