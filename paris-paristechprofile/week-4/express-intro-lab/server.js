// server.js
// SERVER-SIDE JAVASCRIPT
const 
    express = require('express'),//assinging express folder to variable
    app = express(); //assigning packages to the express variable to access contents easily in our project
// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use((req, res, next) => { //middleware functions that perform a slew of 
    //tasks. `Next` specifically is the Ariana Grande of functions (thank you, next).
    //Don't leave a request function hanging. Invoke the thank you, next function
    //to continue seeing other functions. Use binds the function to the app.
    //It's a function that allows us to handle requests/responses
res.header("Access-Control-Allow-Origin", "*");//allows two or more different
//domains to share req/res. THis specifically tells browsers to allow requesting code from any origin
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();//more middleware to handle information. I'm not sure why we
//aren't invoking cors express module. 
});

/* app.get('/', (req, res) => res.send('Hello World!'));
//display hello world when a request is made to the server
res.json(`views/index.html`, {root:_dirname}); */

app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));
//passing this function allows server to accept a parameter from the environment
//to listen at port or 3000 if nothing is there

// server.js
const albums = [
    {
    title: 'Cupid Deluxe',
    artist: 'Blood Orange'
    },
    {
    title: 'M3LL155X - EP',
    artist: 'FKA twigs'
    },
    {
    title: 'Fake History',
    artist: 'letlive.'
    }
];

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/albums', (req, res) => res.json(albums) );