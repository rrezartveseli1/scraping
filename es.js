const axios = require('axios');

// set up the request parameters
const params = {
api_key: "E3078FB9F8764BE5BE244180F14F3C33",
  q: "bitrefill",
  location: "Spain"
}

// make the http GET request to Scale SERP
axios.get('https://api.scaleserp.com/search', { params })
.then(response => {

    // print the JSON response from Scale SERP
    console.log(JSON.stringify(response.data, 0, 1));

  }).catch(error => {
// catch and print the error
console.log(error);
})