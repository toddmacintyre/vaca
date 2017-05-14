const nexmo = require('../controllers/nexmo.js');
const env = require('../../env.json');
const nexmoKey = env.nexmoKey;
const nexmoSecret = env.nexmoSecret;

// const object = {
// 	"from": "12035338310",
// 	"to": "16026707502",
// 	"type": "text",
// 	"text": "Hello there!",
// 	"api_key": env.nexmoKey,
// 	"api_secret": env.nexmoSecret,
// }

module.exports = (app) => {
  app.post('/nexmo', function(req, res) {
    const result = nexmo.test(req.body.text);
    res.send(result);
  });
};
