
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import AllDiscussionsContainer from './Components/Discussions/AllDiscussionsContainer'
import LoginSignupContainer from './Components/Auth/LoginSignupContainer'
import ProfileContainer from './Components/Profile/ProfileContainer'
import NavBar from './Components/NavBar'

function App() {


  //navbar
  //discussions container
  //loginsignupcontainer \\ profile container
  return (
    <div className="App">
      <Switch>
        <Header />
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
      </Switch>
    </div>
  );
}

export default App;
