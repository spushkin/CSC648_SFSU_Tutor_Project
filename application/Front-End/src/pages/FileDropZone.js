// drag n drop element for Tutor application page

import React, { useState } from "react";

const FileDropZone = () => {
	const [dragging, setDragging] = useState(false);
	const [uploadedFiles, setUploadedFiles] = useState([]);

	const handleDragEnter = (e) => {
		e.preventDefault();
		setDragging(true);
	};

	const handleDragLeave = () => {
		setDragging(false);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e) => {
		e.preventDefault();
		setDragging(false);

		const files = Array.from(e.dataTransfer.files);

		// display the uploaded files
		setUploadedFiles(files);
		// display logs
		console.log(files);
	};

	return (
		<div
			className={`file-drop-zone ${dragging ? "dragging" : ""}`}
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
			onDragOver={handleDragOver}
			onDrop={handleDrop}
		>
			<p>Drag and drop your files here</p>

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
