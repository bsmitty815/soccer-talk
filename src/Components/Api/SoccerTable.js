

import { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'

function SoccerTable(){
    const [tableData, setTableData] = useState([])

    //fetch soccer table api from back end
    useEffect(() => {

        fetch('/footballtable')
        .then((r) => r.json())
        .then((data) => setTableData(data.response[0].league.standings))
  
      }, [])
    

    if (tableData.length === 0) return <Loading />

    //creates the display for the teams
    const tableDisplay = tableData[0].map(dataMap => {
        return <tr key ={dataMap.rank}><td>{dataMap.rank}</td><td><img src={dataMap.team.logo} className="team-logo-table" alt="team-logos" /></td><td>{dataMap.team.name}</td><td>{dataMap.all.played}</td><td>{dataMap.all.win}</td><td>{dataMap.all.draw}</td><td>{dataMap.all.lose}</td><td>{dataMap.points}</td></tr>
    })

    return (
        <div className="soccer-table-div">
            
            <table className="soccer-table">
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th></th>
                    <th>Team</th>
                    <th>GP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {tableDisplay}
                </tbody>
                </table>
                
        </div>
    )
}

export default SoccerTable