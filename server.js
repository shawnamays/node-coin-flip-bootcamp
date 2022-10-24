const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

//I have to create a coin flip game
//The user will click a button to "guess" if it'll be heads or tails
//The computer will spit out a random result "heads" or "tails"
//If the result is equal to the user's choice, they win
//Else the user loses

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  //THE FAKE CODE TROUBLESHOOT
  else if (page == '/api') {
    coinFlipArray = ['heads', 'tails']
    const userChoice = params['coinResult']
    //coinResult is the user's button choice in this case
    random = coinFlipArray[Math.floor(Math.random() * coinFlipArray.length)];


    //this is determining how head and tails are calculated
    if (userChoice == random) {
      answer = "You won!!!"
    } else {
      answer = "You lose..."
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    //this is how the code is going to show the result to the user
    //You defined result in the api in the MAIN js file
    const objToJson = {
      selection: `${userChoice}`,
      result: `${answer}` 
    }
    res.end(JSON.stringify(objToJson));

  // } if ()





  // else {
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   const objToJson = {
  //     result: "Unfortunately you LOSE!"

  //   }
  //   res.end(JSON.stringify(objToJson));

  // }
}
  else if (page == '/css/style.css') {
  fs.readFile('css/style.css', function (err, data) {
    res.write(data);
    res.end();
  });
} else if (page == '/js/main.js') {
  fs.readFile('js/main.js', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(data);
    res.end();
  });
} else {
  figlet('404!!', function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    res.write(data);
    res.end();
  });
}
});

server.listen(8000);
