const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const port = 8003;

// import from controller here
const indexController = require('./APIs/IndexController');

app.use(express.static('../Public'));

// Define your API routes here
app.post('/getTutors', bodyParser.json(), async (req, res) => {
    const { subject, searchText } = req.body;
    const results = await indexController.getTutors(subject, searchText);
    res.send(results);
});

// Start the server
app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
});

