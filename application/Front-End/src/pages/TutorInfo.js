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
    const messages = () => {
        let sent = document.getElementById("msg").value
        const api = "http://3.101.225.46:8003/CreateMessage"
        let recieveID = document.getElementById("RecieverID").value
        const response = fetch(api, {
			method: "POST",
			body: JSON.stringify({
				SenderId: JSON.parse(sessionStorage.getItem('user'))[0].id,
                RecevierId: recieveID,
                Text: sent,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then((response) => {
			console.log(response.status);
		});

        
        console.log("Ready to be send message: " + sent)
        document.getElementById("msg").style.display="none";
        
        document.getElementById("but").style.display="none";
        document.getElementById("reachButton2").innerText = "SENT!";
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
                        <div className = "ChatSection">
                            <div id="reachButton2" className="reachButton2">
                            <button id="but" className="reachButton" onClick={messages} >
                                        Get in Contact 
                            </button>
                            
                            <input type="hidden" name="RecieverID" id="RecieverID" value={result.state.id}></input>

                                <textarea id="msg" className="sp" rows="4" cols="33">
                                Hello Tutor...
                                </textarea>
                            </div>
                        </div>
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