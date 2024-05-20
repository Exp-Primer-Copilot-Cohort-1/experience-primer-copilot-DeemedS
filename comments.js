// Create web server
// Server listens on port 3000
// Server responds to GET requests with a list of comments
// Server responds to POST requests by adding a comment to the list of comments
// Server responds to DELETE requests by deleting a comment from the list of comments

// Import express
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();

// Use body-parser middleware
app.use(bodyParser.json());

// Set up an array of comments
let comments = [
    { username: 'Alice', comment: 'Hello from Alice' },
    { username: 'Bob', comment: 'Hello from Bob' }
];

// GET request
app.get('/comments', (req, res) => {
    res.json(comments);
});

// POST request
app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.json(newComment);
});

// DELETE request
app.delete('/comments', (req, res) => {
    comments.pop();
    res.json(comments);
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});