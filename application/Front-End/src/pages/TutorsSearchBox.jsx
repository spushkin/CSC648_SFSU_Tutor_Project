/**
 * Component: TutorsSearchBox
 * Description: Displays a search box for tutor results, including pagination.
 */

import React, { Fragment, useState } from "react";
import TutorCard from "./TutorCard";

function TutorsSearchBox({ results }) {
	// state to manage the current page number
	const [currentPage, setCurrentPage] = useState(1);

	console.log(results);

	// constants and logic for pagination
	let cardPerPage = 4;
	let pageEnd =
		cardPerPage + cardPerPage * (currentPage - 1) < results.length
			? cardPerPage + cardPerPage * (currentPage - 1)
			: results.length;
	let pageStart =
		1 + cardPerPage * (currentPage - 1) <= pageEnd
			? 1 + cardPerPage * (currentPage - 1)
			: pageEnd - 3 > 0
			? pageEnd - 3
			: 1;

	let totalPages = Math.floor(results.length / cardPerPage) + 1;

	// function to increase the current page
	const increasecurrentPage = () => {
		setCurrentPage((currentPage) =>
			currentPage < totalPages ? currentPage + 1 : totalPages
		);
	};

	// function to decrease the current page
	const decreasecurrentPage = () => {
		setCurrentPage((currentPage) => (currentPage > 1 ? currentPage - 1 : 1));
	};

	// JSX structure for the TutorsSearchBox component
	return (
		<Fragment>
			{results.length === 0 ? (
				// display message when there are no results
				<div className="resultLine no-results">
					<h2> No results</h2>
				</div>
			) : (
				// display results information when there are results
				<div className="resultLine">
					<h2>
						<span className="yes-results">Results:</span> {pageStart}-{pageEnd}{" "}
						out of {results.length}
					</h2>
				</div>
			)}

			{/* Main container for displaying tutor cards */}
			<div className="main-container">
				{results
					.filter((el, i) => i < 1)
					.map((el, i) => {
						let countStart = (currentPage - 1) * cardPerPage + i;

						return (
							// container for each set of tutor cards
							<div className="flex-container" key={`random-key-${2 * i + 1}`}>
								<div className={`pagination-main-${i}`}>
									{/* Pagination controls */}
									<div
										className="pagination-left"
										onClick={() => decreasecurrentPage()}
									>
										{" "}
										◀︎{" "}
									</div>
									<div className="pagination-center">
										{" "}
										{currentPage} / {totalPages}{" "}
									</div>
									<div
										className="pagination-right"
										onClick={() => increasecurrentPage()}
									>
										{" "}
										►{" "}
									</div>
								</div>
								{/* Tutor card display */}
								<div className={`flex-${i + 1}`}>
									<div className={`flex-${i + 1}-left`}>
										<TutorCard result={results[countStart]} />
									</div>
									<div className={`flex-${i + 1}-right`}>
										<TutorCard result={results[countStart + 1]} />
									</div>
								</div>
								<div className={`flex-${i + 2}`}>
									<div className={`flex-${i + 2}-left`}>
										<TutorCard result={results[countStart + 2]} />
									</div>
									<div className={`flex-${i + 2}-right`}>
										<TutorCard result={results[countStart + 3]} />
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

export default TutorsSearchBox;
