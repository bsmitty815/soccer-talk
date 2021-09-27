

function ProfileContainer({user}) {
    

    
    return (
        <div>
            <h1>profile container</h1>
            <p>Username: {user.username}</p>
            <p>{user.profile.bio}</p>
            
            <h1>My Team: {user.profile.team}</h1>
        </div>
    )
}

export default ProfileContainer