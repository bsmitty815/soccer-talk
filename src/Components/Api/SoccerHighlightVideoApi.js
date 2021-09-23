//https://www.npmjs.com/package/html-react-parser
//using perser to get the html from the videos
//npm install html-react-parser --save
import parse from 'html-react-parser';

import { useEffect, useState } from 'react'

function SoccerHighlightVideoApi() {
    const [videosData, setVideosData] = useState([])
    console.log(videosData, "state data")
    //fetch soccer videos api from back end
    useEffect(() => {

      fetch('/videohighlights')
      .then((r) => r.json())
      .then((data) => setVideosData(data.response))

    }, [])


    const englandCompetitions = videosData.filter(data => data.competition.toLowerCase().includes("england"))
    
    const videoDisplay = englandCompetitions.map((videoData) => {
        return <div key={videoData.title}><p>{videoData.title}</p><p>{videoData.competition}</p>{videoData.videos.map((data, index) => <div key={index}>{parse(data.embed)}</div>)}</div>
    })
    console.log(videoDisplay, "videoDisplay")

    return (
        <div>
            <h1>Recent Highlights</h1>
           {videoDisplay}
        </div>
    )
}

export default SoccerHighlightVideoApi