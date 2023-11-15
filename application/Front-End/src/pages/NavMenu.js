import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
						<nav>
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
									<NavLink
										to="/signup"
										style={{
											fontSize: "18px",
											fontWeight: "bold",
											fontStyle: "italic",
											textDecoration: "none",
											color: "black",
										}}
									>
										Become a Tutor
									</NavLink>{" "}
									{/*Become a tutor Link*/}
								</li>

								<li>
									<NavLink
										to="/about"
										style={{
											fontSize: "18px",
											fontWeight: "bold",
											fontStyle: "italic",
											textDecoration: "none",
											color: "black",
										}}
									>
										About Us
									</NavLink>{" "}
									{/*About us Link*/}
								</li>

								<li>
									<NavLink
										to="/tutors"
										style={{
											fontSize: "18px",
											fontWeight: "bold",
											fontStyle: "italic",
											textDecoration: "none",
											color: "black",
										}}
									>
										Tutors
									</NavLink>{" "}
									{/*Tutors Link*/}
								</li>
							</ul>
						</nav>
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
						></div>{" "}
					</a>
					{/*Login Icon Link*/}
				</div>
			</div>
		</Fragment>
	);
}

export default NavMenu;
