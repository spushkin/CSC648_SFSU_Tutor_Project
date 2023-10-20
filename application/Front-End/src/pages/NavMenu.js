import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function NavMenu() {
	return (
		<Fragment>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "15px 30px",
					borderBottom: "1px solid #e0e0e0",
					backgroundColor: "#e0f7fa",
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
						<Link
							to="/"
							style={{
								fontSize: "18px",
								fontWeight: "bold",
								fontStyle: "italic",
								textDecoration: "none",
								color: "black",
							}}
						>
							Become a Tutor
						</Link>
						<Link
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
						</Link>
						<Link
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
						</Link>
					</div>

					{/* Icon */}
					<div
						style={{
							width: "30px",
							height: "30px",
							borderRadius: "50%",
							backgroundColor: "gray",
						}}
					></div>
				</div>
			</div>
		</Fragment>
	);
}

export default NavMenu;
