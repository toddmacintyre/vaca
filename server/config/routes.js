const nexmo = require('../controllers/nexmo.js');

module.exports = (app) => {
  app.post('/nexmo', function(req, res) {
    nexmo.test(req);
    res.send('worked');
  });
}