/**
 * Component: Dropdown
 * Description: Dropdown menu for Topics.
 */

import React, { useState, useEffect } from "react";

const Dropdown = () => {
	// state to track whether the dropdown is open
	const [isOpen, setIsOpen] = useState(false);
	// state to store the selected option
	const [options, setOptions] = useState([]);
  	const [selectedOption, setSelectedOption] = useState('');
	// array of topic options

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

	  const handleChange = (event) => {
		setSelectedOption(event.target.value);
	  };

	// event handler for toggling the dropdown
	const handleToggle = () => {
		// toggle the isOpen state
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	// event handler for selecting an option
	const handleSelect = (option) => {
		// set the selected option and close the dropdown
		setSelectedOption(option);
		setIsOpen(false);
	};

	// JSX structure for the Dropdown component
	return (
		
		<div className="dropdown-topics">
			{/* Button to toggle the dropdown */}

			{/* Dropdown content */}
		
			<select value={selectedOption} onChange={handleChange}>
				<option value="" disabled>
					Select an option
				</option>
				{options.map((option) => (
					<option key={option.Name} value={option.Name}>
						{option.Name}
					</option>
				))}
			</select>
			
		</div>
	);
};

export default Dropdown;
