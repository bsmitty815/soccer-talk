
import './App.css';
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import HomePageContainer from './Components/HomePageContainer';



function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])
  //navbar
  //discussions container
  //loginsignupcontainer \\ profile container
  return (
    <div className="App">
      <Header />
      <Switch>

        <Route to="/">
          <HomePageContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
