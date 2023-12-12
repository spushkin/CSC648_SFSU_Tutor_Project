import React, { Fragment } from 'react';
import NavMenu from './NavMenu';
import { Link, useNavigate,useLocation } from "react-router-dom";
import placeholderMedia from '../images/sfLibrary.png';
function TutorInfo({  }) {
// Read values passed on state
const result = useLocation();
    console.log(result.state)
    
    let navigate = useNavigate();
    const mediaItems = [
        { id: 0, title: 'Media 1', image: placeholderMedia },
        { id: 1, title: 'Media 2', image: placeholderMedia },
        { id: 2, title: 'Media 3', image: placeholderMedia },
        { id: 3, title: 'Media 4', image: placeholderMedia },
    ];
	const routeChange = () => {
		let path = `/`;
		navigate(path);
	};
    return (
        <Fragment>
            <NavMenu />
            <div id="outer-container2">
          <div class="infoRow">
                        <div class="infoColumn" >
                        <img src={result.state.Photo} alt="YOUR NAME HERE" className="teamPhotoPage2" />
                    
                         <button className="gobackButton" onClick={routeChange}>GO BACK </button>
                                  
                        </div>

                        <div class="infoColumn">
                            <h1 id="info">{result.state.Name}</h1> 
                            
                            {/* <h3 id="info">Title: {result.state.title}</h3> */}
                            <h4 id="info">Topics: {result.state.topics}</h4>
                            <h4 id="info">Email: {result.state.email}</h4>
                            <i id="info3">Time Avalability: {result.state.sched}</i>
                            <br/>
                            <i id="info3">   {result.state.Description}</i>
                            <br/>
                            
                        </div>
                            <button className="reachButton"onClick={routeChange} >
                                        Get in Contact 
                            </button>
                    </div>
                   
            </div>
            <div className="mediaBox">
                <h1 id="">Media:</h1> 
                    
                <div className="mediaRow">
                        {mediaItems.map(item => (
                        <div key={item.id} className="mediaColumn">
                            <img src={item.image} alt={item.title} className="media-image" />
                            <p className="">{item.title}</p>
                        </div>
                    ))}
                    
                 
                 
                    </div>


            </div>
        </Fragment>
    )
}

export default TutorInfo;