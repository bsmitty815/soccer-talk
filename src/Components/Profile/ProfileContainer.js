

function ProfileContainer({user}) {
    

    
    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <h3>Username: {user.username}</h3>
            <p>{user.profile.bio}</p>
            
            <h3>My Team: {user.profile.team}</h3>
        </div>
    )
}

export default ProfileContainer