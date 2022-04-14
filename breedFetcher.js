const request = require('request');
//only allow 1 search term converted to string
const search = process.argv.slice(2, 3)[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const parsedBody = JSON.parse(body);
  if (!parsedBody[0]) {
    console.error(`Breed Not Found: ${search}`);
    return;
  }
  console.log(parsedBody[0].description);
});