import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import TutorCard from "./TutorCard";

function Tutors() {
	const [results, setResults] = useState([]);
	let page = 0;
	let pageEnd = 4 + 4 * page < results.length ? 4 + 4 * page : results.length;
	let pageStart =
		1 + 4 * page <= pageEnd ? 1 + 4 * page : pageEnd - 3 > 0 ? pageEnd - 3 : 1;

	return (
		<Fragment>
			<NavMenu />
			<br />
			<SearchBar setResults={setResults} />

			{results.length == 0 ? (
				<h2>No results</h2>
			) : (
				<h2>
					Results: {pageStart}-{pageEnd} out of {results.length}
				</h2>
			)}

			<div class="main-container">
				{results
					// change filtering logic later ->  stubbed for now
					.filter((el, i) => i < 1)
					.map((el, i) => {
						return (
							<div class="flex-container">
								<div class={`flex-${i + 1}`}>
									<div class={`flex-${i + 1}-left`}>
										<TutorCard result={results[i]} />
									</div>
									<div class={`flex-${i + 1}-right`}>
										<TutorCard result={results[i + 1]} />
									</div>
								</div>
								<div class={`flex-${i + 2}`}>
									<div class={`flex-${i + 2}-left`}>
										<TutorCard result={results[i + 2]} />
									</div>
									<div class={`flex-${i + 2}-right`}>
										<TutorCard result={results[i + 3]} />
									</div>
								</div>
							</div>
						);
					})}
			</div>
			{/* <Footer /> */}
		</Fragment>
	);
}

export default Tutors;
