
import { Link } from 'react-router-dom'


function HomeNavBar({setSearchTerm, searchTerm}) {


    return (
        <div>
            <span>
                <Link to='/Home'>
                    <button className="ui button" >Home</button>
                </Link>
                <Link to='/highlight-videos'>
                    <button className="ui button" >Highlight Videos</button>
                </Link>
            </span>
            <span>
            <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Search Discussions..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <i className="search icon"></i>
            </div>
            </div>
            </span>
        </div>
    )
}

export default HomeNavBar