const { fetchBreedDescription } = require('./breedFetcher');
//only allow 1 search term converted to string
const breedName = process.argv[2];


fetchBreedDescription(breedName, (error, desc) => {
  if (error) return console.log(error);
  console.log(desc);
});