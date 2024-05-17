// Create web server
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var comments = require('./comments.json');

// Use middleware to parse JSON
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Read comments from file
app.get('/comments', function (req, res) {
  res.json(comments);
});

// Write comments to file
app.post('/comments', function (req, res) {
  comments.push(req.body);
  fs.writeFile(__dirname + '/comments.json', JSON.stringify(comments, null, 4), function (err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(comments);
  });
});

// Start server
app.listen(3000, function () {
  console.log('Server started at http://localhost:3000');
});