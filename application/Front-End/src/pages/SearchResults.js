import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function SearchResults({ result }) {
	return (
		<Fragment>
			<div>{result.name}</div>
		</Fragment>
	);
}

export default SearchResults;
