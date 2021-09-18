
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
            <Link to='/Home'>
                <button>Home</button>
            </Link>
            <Link to='/EditProfile'>
                <button>Edit Profile</button>
            </Link>
            <Link to='/EditPassword'>
                <button>Edit Password</button>
            </Link>
            <Link to='/CreateDiscussion'>
                <button>Create Discussion</button>
            </Link>
            <button onClick={handleLogout} >Logout</button>
        </div>
    )
}

export default NavBar