const request = require('request');
const args = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;


request(url, (error, response, body) => {
  if (error) {
    console.log(`Recieved this error from the API:  ${error}`);
    return;
  }
  //console.log(typeof body)
  const data = JSON.parse(body);
  //console.log(data);
  //console.log(typeof data);
  if (data[0]) {
    for (const key in data[0]) {
      if (key === 'description') {
        console.log(data[0][key]);
      }
    }
  } else {
    console.log(`Error: ${args} not found`);
  }
});