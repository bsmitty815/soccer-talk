
import { useState } from 'react'

function EditProfile({setUser}) {
    const [bio, setBio] = useState("")
    const [selectTeam, setSelectTeam] = useState("")

    const soccerTeams = ['Arsenal', 'Aston Villa', 'Brentford', 'Brighton and Hove Albion', 'Burnley',
    'Chelsea', 'Crystal Palace', 'Everton', 'Leeds United', 'Leicester City', 'Liverpool', 'Manchester City', 'Manchester United',
    'Newcastle United', 'Norwich City', 'Southampton', 'Tottenham Hotspur', 'Watford', 'West Ham United', 'Wolverhampton Wanderers']


    const soccerTeamSelect = soccerTeams.map((team) => {
        return <div className="item" key={team} value={team} onChange={(e) => setSelectTeam(e.target.value)}>{team}</div>
    })

    //handle edit profile
    function handleSubmit(e) {
        e.preventDefault()
        fetch('/profiles/:id', {
            method: "PATCH",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    bio,
                    selectTeam,
            }
            }),
        }).then((r) => {

        })

    }

    //delete account
    function handleDelete() {
        fetch("users/:id", {
            method: "DELETE",
        })
        .then((r) => console.log(r))
        setUser(null)
    }

    return (
        <div>
            <form className="ui form" onSubmit={handleSubmit}>
            <div className="ui form">
            <div className="field">
                <label>bio</label>
                <textarea placeholder={bio} value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                <p>Maximum characters 500</p>
            </div>
            <div className="field">
                <label>Team</label>
                <div className="ui selection dropdown">
                <input type="hidden" />
                <div className="default text">Select Team</div>
                <i clasNames="dropdown icon"></i>
                <div className="menu">
                    
                        {soccerTeamSelect}
                    
                </div>
                </div>
            </div>
            </div>
            <button className="ui button" type="submit">Submit</button>
            </form>
            <button onclick={handleDelete}>Delete Account</button>
        </div>
    )
}

export default EditProfile