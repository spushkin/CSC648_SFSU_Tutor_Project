import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TutorInfo from "./TutorInfo";
function TutorCard({ result }) {
	console.debug(result);
	let navigate = useNavigate();
	const routeChange = () => {
		let path = `/TutorInfo`;
		navigate(path);
	};

	//This is allowing for place holder cards in Index.js.
	if (result == null) {
		return null;
	}

	// Used when We have search results in Index.js
	// function imgas(){
	// 	var code = 	`<img src={tutorsRoute + result.Photo} // ipaddress/TutorImages/result.photo alt="../images/sillouette.jpg" className="proPic" onError={(a) =>{ imgas(); } }/>`;
	// 	 document.getElementById("PIC").innerHTML = code;
	// 	//console.log(document.getElementById("PIC"));
	// }
						
					
	const tutorsRoute = "http://3.101.225.46:8003/TutorImages/"
	
	return (
		<Fragment>
			<div className="CardStyle">
				<div className="card-left">
					<div className="ContainerForRecents"id = "PIC"  >
					<div >
							<img
								src={tutorsRoute + result.Photo} // ipaddress/TutorImages/result.photo
								alt="../images/sillouette.jpg"
								className="proPic"
								// onError={(a) =>{
								// 	 imgas();
								// } }
							/>
					</div>
				
					</div>
				</div>
				<div className="card-right">
					<div className="cardText">
						<h2>
							<i>{result.Name}</i>
						</h2>
						<h3>
							<i>{result.Email}</i>
						</h3>
						<i>
							{result.Description}
						</i>
						<br></br>
					</div>
					<div className="buttonHold">
						<button className="cardbutton" onClick={routeChange}>
							Contact
						</button>
						<button className="cardbutton">View</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default TutorCard;
