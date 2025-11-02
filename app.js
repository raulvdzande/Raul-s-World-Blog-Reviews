const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Dummy blog posts
const posts = [
  {
    title: 'Welcome to My Blog',
    date: 'November 2, 2025',
    content: 'This is the first post on my new Express.js blog. Stay tuned for more updates!'
  },
  {
    title: 'Getting Started with Express.js',
    date: 'October 28, 2025',
    content: 'Express.js makes it easy to build web servers and APIs in Node.js.'
  }
];

// Homepage route
app.get('/', (req, res) => {
  res.render('home', { posts });
});

// Start server
app.listen(port, () => {
  console.log(`Blog app running at http://localhost:${port}`);
});