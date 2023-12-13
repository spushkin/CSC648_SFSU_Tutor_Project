const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 8003;
const AWS = require("aws-sdk");
const multer = require("multer");

// import from controller here
const indexController = require("./APIs/IndexController");

app.use(express.static("../Public"));
const options = {
	origin: "*",
};
app.use(cors());

// Define your API routes here
app.post("/getTutors", bodyParser.json(), async (req, res) => {
	const { subject, searchText } = req.body;
	const results = await indexController.getTutors(subject, searchText);
	res.send(results);
});
app.post("/createUser", bodyParser.json(), async (req, res) => {
	const { firstName, lastName, userName, email, password } = req.body;

	const results = await indexController.createUser(
		firstName,
		lastName,
		userName,
		email,
		password
	);
	res.send(results);
});
app.post("/getUser", bodyParser.json(), async (req, res) => {
	const { email, password } = req.body;
	const results = await indexController.getUser(email, password);
	res.send(results);
});
app.post("/createTutor", bodyParser.json(), async (req, res) => {
	const { name, email, topicId, cv, description, photo, schedule } = req.body;
	const results = await indexController.createTutor(
		name,
		email,
		topicId,
		cv,
		description,
		photo,
		schedule
	);
	res.send(results);
});
app.post("/getTutor", bodyParser.json(), async (req, res) => {
	const { id } = req.body;
	const results = await indexController.getTutor(id);
	res.send(results);
});

app.post("/getTutorByEmail", bodyParser.json(), async (req, res) => {
	const { email } = req.body;
	const results = await indexController.getTutorByEmail(email);
	res.send(results);
});

app.post("/createMessage", bodyParser.json(), async (req, res) => {
	const { SenderId, RecevierId, Text } = req.body;
	const results = await indexController.createMessage(
		SenderId,
		RecevierId,
		Text
	);
	res.send(results);
});
app.post("/getMessage", bodyParser.json(), async (req, res) => {
	const { id } = req.body;
	const results = await indexController.getMessage(id);
	res.send(results);
});
app.post("/getTopic", bodyParser.json(), async (req, res) => {
	const results = await indexController.getTopic();
	res.send(results);
});
app.post("/createTopic", bodyParser.json(), async (req, res) => {
	const { Name, CategoryID, Description } = req.body;
	const results = await indexController.createTopic(
		Name,
		CategoryID,
		Description
	);
	res.send(results);
});
app.post("/createCategory", bodyParser.json(), async (req, res) => {
	const { Name, Description } = req.body;
	const results = await indexController.createCategory(Name, Description);
	res.send(results);
});
app.post("/getCategory", bodyParser.json(), async (req, res) => {
	const results = await indexController.getCategory();
	res.send(results);
});

AWS.config.update({
	accessKeyId: "AKIAYCLPW4ZA6K5MKQU3",
	secretAccessKey: "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",
	region: "us-west-1",
});
const s3 = new AWS.S3();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), async (req, res) => {
	const file = req.file;

	const params = {
		Bucket: "tutoringsite",
		Key: file.originalname,
		Body: file.buffer,
		ContentType: file.mimetype,
		ACL: "public-read",
	};
	console.log(params);
	s3.upload(params, (err, data) => {
		if (!err) {
			res.json({ url: data.Location });
		}
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
