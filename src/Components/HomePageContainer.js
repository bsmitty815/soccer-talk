
import { Route, Switch } from 'react-router-dom'
import AllDiscussionsContainer from './Discussions/AllDiscussionsContainer'
import LoginSignupContainer from './Auth/LoginSignupContainer'
import ProfileContainer from './Profile/ProfileContainer'
import NavBar from './NavBar'
import EditProfile from './Profile/EditProfile'
import EditPassword from './Profile/EditPassword'
import CreateDiscussion from './Discussions/CreateDiscussion'
import IndividualDiscussion from './Discussions/IndividualDiscussion'
import SoccerHighlightVideoApi from './Api/SoccerHighlightVideoApi'

function HomePageContainer({setUser, user}) {


    return (
        <div className="home-page" id="home-page">
            <div className="left-home-page">
            
            <Switch>
                <Route exact path="/Home">
                    <AllDiscussionsContainer />
                </Route>
                <Route exact path="/EditProfile">
                    {(user) ? <EditProfile setUser={setUser} user={user}/> : null }
                </Route>
                <Route exact path="/EditPassword">
                    <EditPassword setUser={setUser}/>
                </Route>
                <Route exact path="/CreateDiscussion">
                    <CreateDiscussion />
                </Route>
                <Route exact path="/discussions/:id">
                    <IndividualDiscussion />
                </Route>
                <Route exact path="/highlight-videos">
                    <SoccerHighlightVideoApi />
                </Route>
                <Route path="/">
                    <AllDiscussionsContainer />
                </Route>
            </Switch>
          
            </div>

            <div className="right-home-page">
            

            <Route>
                {(user) ? null : <LoginSignupContainer setUser={setUser} /> }
            </Route>
            <Route>
                {(user) ? <ProfileContainer user={user}/> : null }
            </Route>

            <Route>
                {(user) ? <NavBar setUser={setUser} /> : null }
            </Route>
            
            </div>

        </div>
    )
}

export default HomePageContainer