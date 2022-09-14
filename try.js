const fetch = require('node-fetch');

fetch('https://api.memegen.link/templates')
  .then((res) => res.json())
  .then((res) => console.log(res));
