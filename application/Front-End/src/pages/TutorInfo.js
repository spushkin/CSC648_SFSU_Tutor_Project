import React, { Fragment } from 'react';
import NavMenu from './NavMenu';
import { Link, useNavigate,useLocation } from "react-router-dom";

function TutorInfo({  }) {
// Read values passed on state
const result = useLocation();
    console.log(result.state)
    
    let navigate = useNavigate();
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
                            
                            <h3 id="info">Title</h3>
                            
                            <h4 id="info">Topics: {result.state.email}</h4>
                    
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
                        <div class="mediaColumn" >
                        FILE 1
                        </div>
                        <div class="mediaColumn" >
                        FILE 2 
                        </div>
                        <div class="mediaColumn">
                        FILE 3
                        </div>
                        <div class="mediaColumn" >
                           FILE 4
                        </div>
                        <div class="mediaColumn" >
                        FILE 5 
                        </div>
                        <div class="mediaColumn">
                        FILE 6
                        </div>
                    </div>


            </div>
        </Fragment>
    )
}

export default TutorInfo;