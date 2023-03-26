const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


  request(url, (error, response, body) => {
    if (error) {
      callback(`Recieved this error from the API:  ${error}`, null);
    }
    //console.log(typeof body)
    const data = JSON.parse(body);
    //console.log(data);
    //console.log(typeof data);
    if (data[0]) {
      for (const key in data[0]) {
        if (key === 'description') {
          callback(null, data[0][key]);
        }
      }
    } else {
      callback(`Error: ${breedName} not found`, null);
    }
  });

};

module.exports = { fetchBreedDescription };