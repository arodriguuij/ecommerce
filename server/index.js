const express = require('express');
const path = require('path');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 3001;
const app = express();

const paths = {
  auth: '/api/auth',
  homepage: '/api/homepage',
};

const middlewares = () => {
  app.use(cors()); // Enable CORS
  app.use(express.json());
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
  // Have Node serve the files for our built React app
  app.use(express.static(path.join(__dirname, '../client/build')));
};
middlewares();

const routes = () => {
  app.use(paths.auth, require('./routes/auth'));
  app.use(paths.homepage, require('./routes/homepage'));
  // Handle GET requests to /api route
  app.get('/test', (req, res) => {
    res.json({ message: 'Hello from server!' });
  });
  // All other GET requests not handled before will return our React app
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
};
routes();

const listen = () => {
  app.listen(port, () => {
    console.log('Server running on port: ', port);
  });
};
listen();
