
import { Link } from 'react-router-dom'

function NavBar({setUser}) {
    //logout/editprofile/editpassword/create discussion

    //logout
    function handleLogout() {
        
        fetch("/logout", {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        })
    }
    
    return (
        <div>
            <h1>navbar container</h1>
            <p>
            <Link to='/Home'>
                <button>Home</button>
            </Link>
            </p>
            <p>
            <Link to='/EditProfile'>
                <button>Edit Profile</button>
            </Link>
            </p>
            <p>
            <Link to='/EditPassword'>
                <button>Edit Password</button>
            </Link>
            </p>
            <p>
            <Link to='/CreateDiscussion'>
                <button>Create Discussion</button>
            </Link>
            </p>
            <p>
            <button onClick={handleLogout} >Logout</button>
            </p>
        </div>
    )
}

export default NavBar