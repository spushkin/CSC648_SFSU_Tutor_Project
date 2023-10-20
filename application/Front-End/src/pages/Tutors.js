import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

function Tutors() {
	return (
		<Fragment>
			<NavMenu />
			<div className="searchBarTutors">
				<table className="tableStyle">
					<tr>
						<td width="15%" className="dropDownBox">
							<select name="filters" id="subject" className="dropDownMenu">
								<option value="all">All</option>
								<option value="math">Math</option>
								<option value="physics">Physics</option>
								<option value="history">History</option>
							</select>
						</td>
						<td width="100%">
							<input
								size="37"
								className="centerSearchBar"
								type="text"
								placeholder="Search for class (e.g. CSC-648)"
								name="search"
							></input>
						</td>
						<td width="15%">
							<div className="searchButton">
								<button className="goButton">Go</button>
							</div>
						</td>
					</tr>
				</table>
			</div>
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
