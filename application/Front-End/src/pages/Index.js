import React, { Fragment, useState } from "react";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import TutorCard from "./TutorCard";
import SearchResultsList from "./SearchResultsList";
import TutorsSearchBox from "./TutorsSearchBox";
import CardTemplate from "./CardTemplate";
import Footer from "../pages/Footer";

function Index() {
	const [results, setResults] = useState([]);
	return (
		<Fragment>
			<NavMenu />
			<div className="searchBox">

				<div className="RecentlyApplied">
					<h2 className="recent">
						<i>Recently Applied Tutors</i>
					</h2>
					<div className="underline"></div>
					<img
						src={require("../images/sfLibrary.png")}
						alt="SFSU Library"
						className="libraryPic"
					/>
					<div className="ContainterForRecents">
					<div className="CardStyle2">
					<div className="card-left">
						<img
							src="http://3.101.225.46:8003/TutorImages/lucygreen.jpeg"
							alt="EMPTY"
							className="proPic"
						/>
					</div>
					<div className="card-right">
						<div className="cardText">
							<h2>
								<i>Lucy Green</i>
							</h2>
							<h3>
								<i>Math</i>
							</h3>
							<i>Math is my favorite subject. Its like writing in<br/> 
								music to me. Teaching it is all the more easier</i>
							<br></br>
						</div>
						<div className="buttonHold">
							<button className="cardbutton">
								Contact
							</button>
						</div>
					</div>
				</div><div className="CardStyle2">
					<div className="card-left">
						<img
							src="http://3.101.225.46:8003/TutorImages/oliviawilde.jpeg"
							alt="EMPTY"
							className="proPic"
						/>
					</div>
					<div className="card-right">
						<div className="cardText">
							<h2>
								<i>Olivia Wilde</i>
							</h2>
							<h3>
								<i>Philosophy</i>
							</h3>
							<i>What is philisophy without reason. I really find it<br/> 
								a wonky subject, but that makes me love it even more.</i>
						</div>
						<div className="buttonHold">
							<button className="cardbutton">
								Contact
							</button>
						</div>
					</div>
				</div><div className="CardStyle2">
					<div className="card-left">
						<img
							src="http://3.101.225.46:8003/TutorImages/harryturner.jpeg"
							alt="EMPTY"
							className="proPic"
						/>
					</div>
					<div className="card-right">
						<div className="cardText">
							<h2>
								<i>Harry Turner</i>
							</h2>
							<h3>
								<i>Economics</i>
							</h3>
							<i>Numbers are just my thing. I am really good at<br/> 
								looking graphs and understanding the data in it.</i>
							<br></br>
						</div>
						<div className="buttonHold">
							<button className="cardbutton">
								Contact
							</button>
						</div>
					</div>
				</div><div className="CardStyle2">
					<div className="card-left">
						<img
							src="http://3.101.225.46:8003/TutorImages/davidlee.jpeg" 
							alt="EMPTY"
							className="proPic"
						/>
					</div>
					<div className="card-right">
						<div className="cardText">
							<h2>
								<i>David Lee</i>
							</h2>
							<h3>
								<i>Geography</i>
							</h3>
							<i>Maps are really cool in my opinion. On my<br/>
							    free time I love to play geoguesser. Fun game!</i>
							<br></br>
						</div>
						<div className="buttonHold">
							<button className="cardbutton">
								Contact
							</button>
						</div>
					</div>
				</div>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default Index;
