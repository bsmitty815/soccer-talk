
import './App.css';
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import HomePageContainer from './Components/HomePageContainer';





function App() {
  const [user, setUser] = useState(null)
  
  //get user that is logged in
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])





  return (
    <div className="App">
      <Header />
      <Switch>

        <Route to="/">
          <HomePageContainer user={user} setUser={setUser} />
        </Route>
      </Switch>

      <div className="footer">

      </div>
      
    </div>
  );
}

export default App;
