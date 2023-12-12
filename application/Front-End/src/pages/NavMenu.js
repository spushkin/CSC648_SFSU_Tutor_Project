import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import TutorsSearchBox from "./TutorsSearchBox";

function NavMenu() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [results, setResults] = useState([]);

	return (
		<Fragment>
			<nav>
				<Link to="/" className="title"><i>Cheep</i></Link>
				<div className="menu"
					onClick={() => {
						setMenuOpen(!menuOpen)
					}}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul className={menuOpen ? "open" : ""}>
					<li className="searchBar">
						<SearchBar setResults={setResults} />	
					</li>

					<li>
						<Link to="/signup">Become a Tutor</Link> 
					</li>

					<li>
						<Link to="/about">About Us</Link>
					</li>

					<li>
						{/* <Link to="/"><img src={require("../images/sillouette.jpg")} className="iconStyle" /></Link> */}
						<div className="wrapper">
						<input className="toggler" id="toggler" type="checkbox"/>
							<label htmlFor="toggler">
								<img src={require("../images/sillouette.jpg")}  className="iconStyle" alt=""/>
							</label>
							<div  className="dropdown">
								<a className= "dropLink" href="/studentsignup">Sign Up</a>
								<a  className= "mid"href="/signin">Sign In</a>
							</div>
						</div>
						
					
					</li>
				</ul>
			</nav>
			{results.length > 0 && <TutorsSearchBox results={results} />}
		</Fragment>
	);
}

export default NavMenu;
