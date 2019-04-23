const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json({type: 'application/json'}));

app.get('/', (req, res) => {
    res.send('Hello Connected to Server!! Sending /')
});

app.use(express.static('client/public'));
// renders the index.html file from the client/public folder same as lines 8-10


app.listen(port, error => {
    if (error) {
        console.log('Error Connecting to Server!');
    } else {
        console.log(`Listening to port ${port}!`);
    }
});