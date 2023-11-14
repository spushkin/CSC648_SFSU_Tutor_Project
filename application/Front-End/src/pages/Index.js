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
				<div className="titleBox">
					<h2 className="center">
						<i>Best Place to find SFSU tutors</i>
					</h2>
					<h2 className="center">
						<i>for SFSU Students</i>
					</h2>
				</div>

				<SearchBar setResults={setResults} />

				{results.length > 0 && <TutorsSearchBox results={results} />}

				<div className="bottomTitleBox">
					<h4 className="center">
						<i>
							One of the greatest collection of San Francisco State Universtiy
							experts in 100+ subjects ready to educate you on your time!
						</i>
					</h4>
				</div>

				<div className="RecentlyApplied">
					<h2 className="recent">
						<i>Recently Applied Tutors</i>
					</h2>
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
