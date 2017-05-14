const env = require('../../env.json');
const axios = require('axios');

const test = (text) => {
  console.log('text', text);

  const makeRequest = 'sms'; // change this back to true to start making api calls again

  const reqBody = {
    "from": "12035338310",
    "to": "13306928816",
    "type": "text",
    "text": text,
    "api_key": env.nexmoKey,
    "api_secret": env.nexmoSecret,
  }


  if (makeRequest === 'sms') {
    return axios.post('https://rest.nexmo.com/sms/json', reqBody)
      .then(function (response) {
        console.log('+++++++', response.data);
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

// 13306928816
// 12035338310
