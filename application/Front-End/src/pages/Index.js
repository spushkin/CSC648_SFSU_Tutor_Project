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
						<CardTemplate />
						<CardTemplate />
						<CardTemplate />
						<CardTemplate />
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default Index;
