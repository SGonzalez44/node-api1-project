const express = require('express');

const Users = require('./data/db.js');

const server = express();

server.use(express.json());

server.post('/api/users', (req, res) => {
    const { name, bio } = req.body;

    if (!name || !bio) {
        res
        .statusMessage(400)
        .json({ errorMessage: 'Please provide name and bio for the user.'})
    } else {
        Users.insert(req.body)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(() => {
            res.status(500).json({
                errorMessage:
                'There was an error saving the user to the database'
            });
        });
    }
});

server.get('/api/users', (req, res) => {
    Users.find()
    .then(users => {
        console.log('users', api.users);
        res.status(200).json(users);
    })
    .catch(() => {
        res.status(500).json({
            errorMessage: 'The users information could not be retrieved.',
        });
    });
});

server.get('/api/users/:id', (req, res) => {
    Users.findById(req.params.id)
    .then(user => {
        if (user) {
            res.status(200).json(user);
        } else {
            res
            .status(404)
            .json({ message: 'The user with the specific Id does not exist'});
        }
    })
    .catch(() => {
        res
        .status(500)
        .json({ errorMessage: 'The user information could not be retrieved' });
    });
});

