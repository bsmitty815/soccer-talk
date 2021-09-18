
import './App.css';
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import HomePageContainer from './Components/HomePageContainer';
import 'semantic-ui-css/semantic.min.css'




function App() {
  const [user, setUser] = useState(null)
  console.log(user)

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
          <HomePageContainer setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
