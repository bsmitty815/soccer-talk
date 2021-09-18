

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
            <button onClick={handleLogout} >Logout</button>
        </div>
    )
}

export default NavBar