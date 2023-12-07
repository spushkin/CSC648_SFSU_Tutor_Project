import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

function Tutors() {
	const [results, setResults] = useState([]);

	return (
		<Fragment>
			<NavMenu />
			<br />
		</Fragment>
	);
}

export default Tutors;
