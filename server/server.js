const express = require('express');
const path = require('path');

const port = process.env.PORT || 1337;
const app = express();


// parsing middleware
require('./config/middleware.js')(app, express);

// routes
require('./config/routes.js')(app, express);

app.use(express.static(path.join(__dirname, '/../build')));
app.get('/*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log('Server is listening on ', port);
});

module.exports = app;
