import React, { Fragment } from "react";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import Footer from "../pages/Footer";

function About() {
	return (
		<Fragment>
			<NavMenu />
			<div className="about-container">
				<div className="interFont">
					<h1 className="center">
						<b>Software Engineer Class SFSU</b>
					</h1>
					<h2 className="center">
						<b>&lt;Fall , 2023&gt;</b>
					</h2>
					<div className="bar"></div>
					<h3 className="center">
						<b>Team 05 | Section 03</b>
					</h3>
				</div>

				<div className="photo-grid">
					<div className="team-member">
						<Link to="/daivikpurani" target="_blank">
							<img
								src={require("../images/Profile_Daivik.jpeg")}
								alt="DaivikPurani"
								className="aboutPhotoPage"
							/>
						</Link>
						<Link to="/daivikpurani" target="_blank">
							<h4 className="center">Daivik Purani</h4>
						</Link>
						<Link to="/daivikpurani" target="_blank">
							<h5 className="center">Team Lead</h5>
						</Link>
					</div>
					<div className="team-member">
						<Link to="/jovannyramos" target="_blank">
							<img
								src={require("../images/Profile_Jovanny.png")}
								alt="Jovanny Ramos"
								className="aboutPhotoPage"
							/>
						</Link>
						<Link to="/jovannyramos" target="_blank">
							<h4 className="center">Jovanny Ramos</h4>
						</Link>
						<Link to="/jovannyramos" target="_blank">
							<h5 className="center">Front End Lead</h5>
						</Link>
					</div>
					<div className="team-member">
						<Link to="/williamambriz" target="_blank">
							<img
								src={require("../images/William.jpeg")}
								alt="William Ambriz"
								className="aboutPhotoPage"
							/>
						</Link>
						<Link to="/williamambriz" target="_blank">
							<h4 className="center">William Ambriz</h4>
						</Link>
						<Link to="/williamambriz" target="_blank">
							<h5 className="center">GitHub Master</h5>
						</Link>
					</div>
					<div className="team-member">
						<Link to="/akshargothi" target="_blank">
							<img
								src={require("../images/Akshar.jpg")}
								alt="Akshar Gothi"
								className="aboutPhotoPage"
							/>
						</Link>
						<Link to="/akshargothi" target="_blank">
							<h4 className="center">Akshar Gothi</h4>
						</Link>
						<Link to="/akshargothi" target="_blank">
							<h5 className="center">Back End Lead</h5>
						</Link>
					</div>
					<div className="team-member">
						<Link to="/siarheipushkin" target="_blank">
							<img
								src={require("../images/Profile_Siarhei.jpg")}
								alt="Siarhei Pushkin"
								className="aboutPhotoPage"
							/>
						</Link>
						<Link to="/siarheipushkin" target="_blank">
							<h4 className="center">Siarhei Pushkin</h4>
						</Link>
						<Link to="/siarheipushkin" target="_blank">
							<h5 className="center">Documentation</h5>
						</Link>
					</div>
					<div className="team-member">
						<Link to="/EsauBMedina" target="_blank">
							<img
								src={require("../images/Profile_Esau.jpg")}
								alt="Esau B. Medina"
								className="aboutPhotoPage"
							/>
						</Link>
						<Link to="/EsauBMedina" target="_blank">
							<h4 className="center">Esau B. Medina</h4>
						</Link>
						<Link to="/EsauBMedina" target="_blank">
							<h5 className="center">Documentation</h5>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default About;
