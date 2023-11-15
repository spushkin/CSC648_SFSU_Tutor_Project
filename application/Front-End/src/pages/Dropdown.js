// Dropdown menu for Topics

import React, { useState } from "react";

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const options = ["Physics", "Math", "CS", "Chemistry"];

	const handleToggle = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	const handleSelect = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<div className="dropdown">
			<button type="button" className="dropdown-btn" onClick={handleToggle}>
				{selectedOption ? selectedOption : "Click to select Topic"}
			</button>
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
