
import { useState } from 'react'

function EditProfile() {
    const [selectTeam, setSelectTeam] = useState("")

    const soccerTeams = ['Arsenal', 'Aston Villa', 'Brentford', 'Brighton and Hove Albion', 'Burnley',
    'Chelsea', 'Crystal Palace', 'Everton', 'Leeds United', 'Leicester City', 'Liverpool', 'Manchester City', 'Manchester United',
    'Newcastle United', 'Norwich City', 'Southampton', 'Tottenham Hotspur', 'Watford', 'West Ham United', 'Wolverhampton Wanderers']


    const soccerTeamSelect = soccerTeams.map((team) => {
        return <select key={team} value={team} onChange={(e) => setSelectTeam(e.target.value)}>{team}</select>
    })

    return (
        <div>
            <div class="ui form">
            <div class="field">
                <label>Team</label>
                <textarea></textarea>
            </div>
            <div class="field">
                <label>Team</label>
                <div class="ui selection dropdown">
                <input type="hidden" />
                <div class="default text">Select Team</div>
                <i class="dropdown icon"></i>
                <div class="menu">
                    <div class="item">
                        {soccerTeamSelect}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default EditProfile