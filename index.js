// implement your API here
const express = require('express');

const port = 4500;

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello world from Express');
});

server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

