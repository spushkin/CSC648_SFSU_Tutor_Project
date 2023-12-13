import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SearchBar({ setResults }) {
	const [input, setInput] = useState("");
	const [sub, setSub] = useState("all");
	const [clicked, setClicked] = useState(false);
	const [options, setOptions] = useState([]);
  	const [selectedOption, setSelectedOption] = useState('');

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
			if (input == ""){
			return	fetchAll();
			}else{
				fetchData();
			}
	};

	const topicApi = "http://3.101.225.46:8003/getTopic";

	useEffect(() => {
		// Fetch dynamic data (replace this with your data-fetching logic)
		const fetchData = async () => {
		  try {
			const response = await fetch(topicApi, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				}});
			const data = await response.json();
			console.log(data);
			setOptions(data);
		  } catch (error) {
			console.error('Error fetching options:', error);
		  }
		};
	
		fetchData();
	  }, []);

	  const handleTopicChange = (event) => {
		setSelectedOption(event.target.value);
	  };

	return (
		<Fragment>
			<div className="searchBar">
				<form action="" id="searchForm" onSubmit={(e) => e.preventDefault()}>
					<select id="searchFormSelect" name="searchFormSelect">
						<option value="value" disabled>
							Select an option
						</option>
						<option value="all">
							All
						</option>
						{options.map((option) => (
							<option key={option.Name} value={option.Name}>
								{option.Name}
							</option>
						))}
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
