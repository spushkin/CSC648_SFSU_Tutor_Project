import React, { Fragment, useState } from "react";
import TutorCard from "./TutorCard";

function TutorsSearchBox({ results }) {
	const [currentPage, setCurrentPage] = useState(1);

	console.log(results);

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

	const increasecurrentPage = () => {
		setCurrentPage((currentPage) =>
			currentPage < totalPages ? currentPage + 1 : totalPages
		);
	};

	const decreasecurrentPage = () => {
		setCurrentPage((currentPage) => (currentPage > 1 ? currentPage - 1 : 1));
	};

	return (
		<Fragment>
			{results.length === 0 ? (
				<div className="resultLine no-results">
					<h2> No results</h2>
				</div>
			) : (
				<div className="resultLine">
					<h2>
						<span className="yes-results">Results:</span> {pageStart}-{pageEnd}{" "}
						out of {results.length}
					</h2>
				</div>
			)}

			<div className="main-container">
				{results
					//  change filtering logic later ->  stubbed for now
					.filter((el, i) => i < 1)
					.map((el, i) => {
						let countStart = (currentPage - 1) * cardPerPage + i;

						return (
							<div className="flex-container" key={`random-key-${2 * i + 1}`}>
								<div className={`pagination-main-${i}`}>
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
