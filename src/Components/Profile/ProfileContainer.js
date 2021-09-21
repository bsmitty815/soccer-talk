

function ProfileContainer({user}) {
    

    
    return (
        <div>
            <h1>profile container</h1>
            <p>{user.profile.bio}</p>
            
            <h1>{user.profile.team}</h1>
        </div>
    )
}

export default ProfileContainer