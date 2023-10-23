import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function SearchBar({ setResults }) {
	const [input, setInput] = useState("");
	const [sub, setSub] = useState("");
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

	const fetchData = () => {
		fetch("http://3.101.225.46:8003/getTutors", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				subject : sub, // 'all' shows all results
				searchText : input // if empty ("") => show all
			})
		}).then((response) => response.json()).then((json) => {
				const results = json.filter((user) => {
					return (
						input &&
						user.Name &&
						user.Name.toLowerCase().includes(input)
					);
				});
				setResults(results);
			});
	};
	const fetchAll = () => {
		fetch("http://3.101.225.46:8003/getTutors", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				subject : sub, // 'all' shows all results
				searchText : input// if empty ("") => show all
			})
		}).then((response) => response.json()).then((json) => {
				const results = json.filter((user) => {
					return (
						user.Name &&
						user.Name.toLowerCase().includes(input)
					);
				});
				setResults(results);
			});
	};
	const handleChange = (value) => {
		setInput(value);
	};

	const handleSubmit = () => {
		var a = document.getElementById('searchFormSelect').value;
		setSub(a);
			if (input == "" && sub == "all"){
			return	fetchAll();
			}else{
				fetchData();
			}
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
