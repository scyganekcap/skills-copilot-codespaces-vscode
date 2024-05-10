// create web server
const express = require('express');
const app = express();
// middleware
app.use(express.json());
// create a list of comments
const comments = [];
// create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.send('Comment added');
});
// get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});
// start web server
app.listen(3000, () => console.log('Server is running on port 3000'));
// Path: index.js
// create a new comment
const axios = require('axios');
axios.post('http://localhost:3000/comments', {
  comment: 'Hello world'
}).then(res => {
  console.log(res.data);
});
// get all comments
axios.get('http://localhost:3000/comments').then(res => {
  console.log(res.data);
});