
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function EditProfile({setUser, user}) {
    const [bio, setBio] = useState(user.profile.bio)
    const [selectTeam, setSelectTeam] = useState(user.profile.team)
    const [errors, setErrors] = useState("errors:")
    const [updatedMessage, setUpdatedMessage] = useState("")
    const history = useHistory()


    const soccerTeams = ['Select Team', 'Arsenal', 'Aston Villa', 'Brentford', 'Brighton and Hove Albion', 'Burnley',
    'Chelsea', 'Crystal Palace', 'Everton', 'Leeds United', 'Leicester City', 'Liverpool', 'Manchester City', 'Manchester United',
    'Newcastle United', 'Norwich City', 'Southampton', 'Tottenham Hotspur', 'Watford', 'West Ham United', 'Wolverhampton Wanderers']

    function handleDropdown(event) {
        setSelectTeam(event.target.value)
    }
    // all teams and create option dropdown menu
    const soccerTeamSelect = soccerTeams.map((team) => {
       return <option key={team} value={team} >{team}</option>
    })
    

    //handle edit profile
    function handleSubmit(e) {
        setErrors("errors:")
        setUpdatedMessage("")
        e.preventDefault()
        fetch('/profiles/:id', {
            method: "PATCH",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    bio,
                    team: selectTeam,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
                setUpdatedMessage("Profile Updated")
            } else {
                r.json().then((data) => setErrors(data.exception))
            }
        })

    }

    //delete account
    function handleDelete() {
        fetch("users/:id", {
            method: "DELETE",
        })
        .then((r) => console.log(r))
        setUser(null)
        history.push('/')
    }

    //handle errors string
    const errorsString = errors.split(":").slice(-1)
    const errorsDisplay = errorsString[0].replace(">", "")

    return (
        <div>
            <form className="ui form" onSubmit={handleSubmit}>
            <div className="ui form">
                <div className="field">
                    <label>bio</label>
                    <textarea placeholder={bio} value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                    <p>Maximum characters 200</p>
                </div>
                <div className="fields">
                    <div >
                        <label>Team</label>
                        <div className="two fields">
                            <div className="feild">
                                <select className="ui flui search dropdown" onChange={handleDropdown}>
                                {soccerTeamSelect}
                                        
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p>{errorsDisplay}</p>
            <p>{updatedMessage}</p>
            <button className="ui button" type="submit">Submit</button>
            </form>
            
                <p>
                <button className="ui button" onClick={handleDelete}>Delete Account</button>
                </p>
            

        </div>
    )
}

export default EditProfile