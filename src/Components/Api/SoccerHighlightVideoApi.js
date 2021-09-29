//https://www.npmjs.com/package/html-react-parser
//using perser to get the html from the videos
//npm install html-react-parser --save
import parse from 'html-react-parser';

import { useEffect, useState } from 'react'

function SoccerHighlightVideoApi() {
    const [videosData, setVideosData] = useState([])

    //fetch soccer videos api from back end
    useEffect(() => {

      fetch('/videohighlights')
      .then((r) => r.json())
      .then((data) => setVideosData(data.response))

    }, [])

    //filter through to only show the english competitions
    const englandCompetitions = videosData.filter(data => data.competition.toLowerCase().includes("england"))
    //map through the results and add them to the screen
    const videoDisplay = englandCompetitions.map((videoData) => {
        return <div className="highlight-video-container" key={videoData.title}>
            <div className="highlight-video-container-div-space"></div>
            <p>{videoData.title}</p>
            <p>Competition - {videoData.competition}</p>
            {videoData.videos.map((data, index) => <div key={index}>{parse(data.embed)}</div>)}
            
            </div>
    })


    return (
        <div className="soccer-highlights-container">
            <h1>Recent Highlights</h1>
           {videoDisplay}
        </div>
    )
}

export default SoccerHighlightVideoApi