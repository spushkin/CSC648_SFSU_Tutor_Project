/**
 * Component: Dropdown
 * Description: Dropdown menu for Topics.
 */

import React, { useState } from "react";

const Dropdown = () => {
	// state to track whether the dropdown is open
	const [isOpen, setIsOpen] = useState(false);
	// state to store the selected option
	const [selectedOption, setSelectedOption] = useState(null);
	// array of topic options
	const options = ["Physics", "Math", "CS", "Chemistry"];

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
		<div className="dropdown">
			{/* Button to toggle the dropdown */}
			<button type="button" className="dropdown-btn" onClick={handleToggle}>
				{selectedOption ? selectedOption : "Click to select Topic"}
			</button>

			{/* Dropdown content */}
			{isOpen && (
				<div className="dropdown-content">
					{options.map((option) => (
						<div
							className="topic-dropdown"
							key={option}
							onClick={() => handleSelect(option)}
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
