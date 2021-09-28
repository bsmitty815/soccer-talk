

import { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'

function SoccerTable(){
    const [tableData, setTableData] = useState([])
    console.log(tableData, "state data")

    //fetch soccer videos api from back end
    useEffect(() => {

        fetch('/footballtable')
        .then((r) => r.json())
        .then((data) => setTableData(data.response[0].league.standings))
  
      }, [])
    

    if (tableData.length === 0) return <Loading />


    const ex = tableData.map(data => data[0]).map(data => data.team.name)
    console.log(ex, "ex")
    const x = tableData.map(data => data[0]).map(data => data.team)
    console.log(x, "x")
    // const xe = tableData[0].map(data => data)
    // console.log(xe, "xe")
    // const tableDisplay = tableData.map(data => data.standings[0]).map(leagueData => leagueData)
    // console.log(tableDisplay, "one")
    const td = tableData[0].map(dataMap => {
        return <div>rank: {dataMap.rank} team: {dataMap.team.name} points: {dataMap.points} <img src={dataMap.team.logo} /></div>
    })
    const tableDisplay = tableData[0].map(dataMap => {
        return <tr key ={dataMap.rank}><td>{dataMap.rank}</td><td><img src={dataMap.team.logo} /></td><td>{dataMap.team.name}</td><td>{dataMap.all.played}</td><td>{dataMap.all.win}</td><td>{dataMap.all.draw}</td><td>{dataMap.all.loss}</td><td>{dataMap.points}</td></tr>
    })



    console.log(td, "two")
    return (
        <div>
            
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
                {td}
        </div>
    )
}

export default SoccerTable