const request = require('request');
const fs = require('fs');

const urls = process.argv.slice(2);

let bodyText;

request(urls[0], (error, response, body) => {
  bodyText = body; // Print the HTML for the Google homepage.
});

fs.writeFile(urls[1], content, err => {
  if (err) {
    console.error(err);
  }
});


