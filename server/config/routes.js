const nexmo = require('../controllers/nexmo.js');
const env = require('../../env.json');
const nexmoKey = env.nexmoKey;
const nexmoSecret = env.nexmoSecret;



module.exports = (app) => {
  app.post('/nexmo', function(req, res) {
    const result = nexmo.test(req.body.text);
    res.send(result);
  });
};
