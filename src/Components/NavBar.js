
import { Link, useHistory } from 'react-router-dom'

function NavBar({setUser}) {
    //logout/editprofile/editpassword/create discussion
    const history = useHistory()
    //logout
    function handleLogout() {
        
        fetch("/logout", {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setUser(null)
                history.push('/')
            }
        })
    }
    
    return (
        <div>
            <h1>navbar container</h1>
            <p>
            <Link to='/Home'>
                <button className="ui button" >Home</button>
            </Link>
            </p>
            <p>
            <Link to='/EditProfile'>
                <button className="ui button" >Edit Profile</button>
            </Link>
            </p>
            <p>
            <Link to='/EditPassword'>
                <button className="ui button" >Edit Password</button>
            </Link>
            </p>
            <p>
            <Link to='/CreateDiscussion'>
                <button className="ui button" >Create Discussion</button>
            </Link>
            </p>
            <p>
            <button onClick={handleLogout} className="ui button"  >Logout</button>
            </p>
        </div>
    )
}

export default NavBar