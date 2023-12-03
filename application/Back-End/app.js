const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8003;

// import from controller here
const indexController = require('./APIs/IndexController');

app.use(express.static('../Public'));
const options = {
    origin: '*',
    }
app.use(cors(options));

// Define your API routes here
app.post('/getTutors', bodyParser.json(), async (req, res) => {
    const { subject, searchText } = req.body;
    const results = await indexController.getTutors(subject, searchText);
    res.send(results);
});
app.post('/createUser', bodyParser.json(), async (req, res) => {
    const { firstname, lastname, username, email, password} = req.body;
    console.log("Ffdf");
    console.log(firstname);
    const results = await indexController.createUser(firstname, lastname, username, email, password);
    res.send(results);
});
app.post('/getUser', bodyParser.json(), async (req, res) => {
    const { email, password } = req.body;
    const results = await indexController.getUser(email, password);
    res.send(results);
});
app.post('/createTutor', bodyParser.json(), async (req, res) => {
    const { name, email, topicId, cv, description, photo, schedule } = req.body;
    const results = await indexController.createTutor(name, email, topicId, cv, description, photo, schedule);
    res.send(results);
});
app.post('/getTutor', bodyParser.json(), async (req, res) => {
    const { id } = req.body;
    const results = await indexController.getTutor(id);
    res.send(results);
});
app.post('/createMessage', bodyParser.json(), async (req, res) => {
    const { SenderId, RecevierId, Text } = req.body;
    const results = await indexController.getTutors(SenderId, RecevierId, Text);
    res.send(results);
});
app.post('/getMessage', bodyParser.json(), async (req, res) => {
    const { id } = req.body;
    const results = await indexController.getTutors(id);
    res.send(results);
});
app.post('/getTopic', bodyParser.json(), async (req, res) => {
    const results = await indexController.getTutors();
    res.send(results);
});

app.get('/test', async (req, res) => {
    res.send('Hello World!');
});


// Start the server
app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
});

