const env = require('../../env.json');
const axios = require('axios');

const test = (text) => {
  console.log('text', text);

  const makeRequest = false; // change this back to true to start making api calls again

  const reqBody = {
    "from": "16026707502",
    "to": "16026707502",
    "type": "text",
    "text": text,
    "api_key": env.nexmoKey,
    "api_secret": env.nexmoSecret,
  }


  if (makeRequest === 'sms') {
    return axios.post('https://rest.nexmo.com/sms/json', reqBody)
      .then(function (response) {
        return `success: ${response}`;
      })
      .catch(function (error) {
        return `fail: ${error}`;
      });
  } else if (makeRequest === 'phone') {
    return;
  }
  return 'makeRequest set to false.';
}

module.exports = { test, };
