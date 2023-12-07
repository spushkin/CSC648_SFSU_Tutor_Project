import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavMenu() {
	const [menuOpen, setMenuOpen] = useState(false);

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
					<li>
						<Link to="/template">Become a Tutor</Link>
					</li>

					<li>
						<Link to="/about">About Us</Link>
					</li>

					<li>
						<Link to="/tutors">Tutors</Link>
					</li>
					<li>
						<Link to="/"><img src={require("../images/sillouette.jpg")} className="iconStyle" /></Link>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
}

export default NavMenu;
