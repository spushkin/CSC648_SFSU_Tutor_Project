import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResults";

function SearchResultsList({ results }) {
	return (
		<Fragment>
			<div className="results-list">
				{ 
					results.map((result, id) => {
						return <SearchResults result={result} key={id}/>;
					})
				}
                <div>a</div>
                <div>b</div>
                <div>c</div>
            </div>
		</Fragment>
	);
}

export default SearchResultsList;
