const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) callback(error, null);
    const parsedBody = JSON.parse(body);
    if (!parsedBody[0]) {
      callback(`Breed Not Found: ${breedName}`, null);
    } else {
      callback(error, parsedBody[0].description)
    }
  });
};

module.exports = { fetchBreedDescription };