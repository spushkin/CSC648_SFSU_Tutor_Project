import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResults";
import TutorCard from "./TutorCard";

function SearchResultsList({ results, from }) {
	return (
		<Fragment>
			<div className="results-list">
				{ 
					results.map((result, id) => {
						
						if(from == 1){
							return <TutorCard result={result} key={id}/>;
						}else{
							return <SearchResults result={result} key={id}/>;
						}
						
					})
				}
			</div>
		</Fragment>
	);
}

export default SearchResultsList;
