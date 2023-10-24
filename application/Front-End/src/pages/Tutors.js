import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import TutorsSearchBox from "./TutorsSearchBox";

function Tutors() {
	const [results, setResults] = useState([]);

	return (
		<Fragment>
			<NavMenu />
			<br />
			<SearchBar setResults={setResults} />

			<TutorsSearchBox results={results} />

			{/* <Footer /> */}
		</Fragment>
	);
}

export default Tutors;
