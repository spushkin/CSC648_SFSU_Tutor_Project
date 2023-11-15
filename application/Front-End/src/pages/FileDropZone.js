/**
 * Component: FileDropZone
 * Description: Drag-and-drop element for the Tutor application page.
 */

import React, { useState } from "react";

const FileDropZone = () => {
	// state to track dragging state
	const [dragging, setDragging] = useState(false);
	// state to store uploaded files
	const [uploadedFiles, setUploadedFiles] = useState([]);

	// event handler for drag enter
	const handleDragEnter = (e) => {
		e.preventDefault();
		setDragging(true);
	};

	// event handler for drag leave
	const handleDragLeave = () => {
		setDragging(false);
	};

	// event handler for drag over
	const handleDragOver = (e) => {
		e.preventDefault();
	};

	// event handler for drop
	const handleDrop = (e) => {
		e.preventDefault();
		setDragging(false);

		// get the dropped files
		const files = Array.from(e.dataTransfer.files);

		// update state with the uploaded files
		setUploadedFiles(files);

		// display logs
		console.log(files);
	};

	// JSX structure for the FileDropZone component
	return (
		<div
			className={`file-drop-zone ${dragging ? "dragging" : ""}`}
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
			onDragOver={handleDragOver}
			onDrop={handleDrop}
		>
			<p>Drag and drop your files here</p>

			{/* Display uploaded files if any */}
			{uploadedFiles.length > 0 && (
				<div>
					<p>Uploaded Files:</p>
					<ul>
						{uploadedFiles.map((file, index) => (
							<li key={index}>{file.name}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default FileDropZone;
