import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavMenu() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Fragment>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "15px 30px",
					borderBottom: "1px solid #e0e0e0",
					backgroundColor: "#9cf4ff",
				}}
			>
				<nav>
					{/* Title */}
					<Link
						to="/"
						style={{
							fontSize: "30px",
							fontWeight: "bold",
							fontStyle: "italic",
							textDecoration: "none",
							color: "black",
						}}
					>
						Cheep
					</Link>

					<SearchBar />
					{/* Right container */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "30px",
						}}
					>
						{/* Navigation Links */}
						<div
							style={{
								display: "flex",
								gap: "30px",
							}}
						>
							<div
								className="navDropMenu"
								onClick={() => setMenuOpen(!menuOpen)}
							>
								<span></span>
								<span></span>
								<span></span>
							</div>

							<ul className={menuOpen ? "open" : ""}>
								<li>
									<NavLink to="/signup">Become a Tutor</NavLink>
								</li>
								<li>
									<NavLink to="/about">About Us</NavLink>
								</li>
								<li>
									<NavLink to="/tutors">Tutors</NavLink>
								</li>
							</ul>
						</div>
						{/* Icon */}
						<a href={"/SignIn"}>
							<div
								style={{
									width: "30px",
									height: "30px",
									borderRadius: "50%",
									backgroundColor: "gray",
								}}
							></div>
						</a>
					</div>

				</nav>
			</div>
		</Fragment>
	);
}

export default NavMenu;

