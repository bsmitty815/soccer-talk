
import { useState } from 'react'
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
import HomeNavBar from './HomeNavBar'
import SoccerTable from './Api/SoccerTable'
import DiscussionCreated from './Discussions/DiscussionCreated'
import DiscussionDeleted from './Discussions/DiscussionDeleted'

function HomePageContainer({setUser, user}) {

    const [searchTerm, setSearchTerm] = useState("")
    
    return (
        <div id="home-page">
            <div className="left-home-page">
            <HomeNavBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <Switch>
                <Route exact path="/Home">
                    <AllDiscussionsContainer searchTerm={searchTerm} />
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
                <Route exact path="/DiscussionCreated">
                    <DiscussionCreated />
                </Route>
                <Route exact path="/DiscussionDeleted">
                    <DiscussionDeleted />
                </Route>
                <Route exact path="/discussions/:id">
                    <IndividualDiscussion user={user} />
                </Route>
                <Route exact path="/highlight-videos">
                    <SoccerHighlightVideoApi />
                </Route>
                <Route exact path="/football-table">
                    <SoccerTable />
                </Route>
                <Route path="/">
                    <AllDiscussionsContainer searchTerm={searchTerm} />
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