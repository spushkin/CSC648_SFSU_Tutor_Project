import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function SearchBar({ setResults }) {
	const [input, setInput] = useState("");
	const [clicked, setClicked] = useState(false);

	// fetch("3.101.225.46/getTutors", {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "application/json"
	// 	},
	// 	body: JSON.stringify({
	// 		subject : "Physics",
	// 		searchText: "abc"
	// 	  })
	// })
	// .then((response) => response.json())

	const fetchData = (value) => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => {
				const results = json.filter((user) => {
					return (
						value &&
						user &&
						user.name &&
						user.name.toLowerCase().includes(value)
					);
				});
				setResults(results);
			});
	};

	const handleChange = (value) => {
		setInput(value);
	};

	const handleSubmit = () => {
		fetchData(input);
	};

	return (
		<Fragment>
			<div className="searchBar">
				<form action="" id="searchForm" onSubmit={(e) => e.preventDefault()}>
					<select
						name="searchFormSelect"
						id="searchFormSelect"
						form="searchForm"
						className="dropDownBox"
					>
						<option value="all">All</option>
						<option value="math">Math</option>
						<option value="physics">Physics</option>
						<option value="history">History</option>
					</select>
					<input
						size="37"
						className="centerSearchBar"
						type="text"
						placeholder="           Search for class (e.g. CSC-648)"
						name="search"
						value={input}
						onChange={(e) => handleChange(e.target.value)}
					/>{" "}
					<button
						type="submit"
						className="goButton"
						onClick={() => handleSubmit()}
					>
						Go
					</button>
				</form>
			</div>
		</Fragment>
	);
}

export default SearchBar;
