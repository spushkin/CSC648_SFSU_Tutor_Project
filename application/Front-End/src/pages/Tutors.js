import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

function Tutors() {
	const [results, setResults] = useState([]);

	return (
		<Fragment>
			<NavMenu />
			<br />
			<SearchBar setResults={setResults} />
			<SearchResultsList results={results}/>

			<div class="main-container">
				<div class="flex-container">
					<div class="flex-1">
						<div class="flex-1-left">1</div>
						<div class="flex-1-right">2</div>
					</div>
					<div class="flex-2">
						<div class="flex-2-left">1</div>
						<div class="flex-2-right">2</div>
					</div>
					<div class="flex-3">
						<div class="flex-3-left">[]</div>
						<div class="flex-3-right">[]</div>
						<div class="flex-3-right">[]</div>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default Tutors;
