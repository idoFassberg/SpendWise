const express = require('express');
const app = express();

// TODO: choose better port number
const PORT = 3000;

app.get('/', (req, res) => { 
    res.send('just add /yuli to the url');
    });


app.get('/love/:name', (req, res) => {
    res.send('I LOVE ' + req.params.name);
    });

// endpoint for unknown routes
// this endpoint should be at the end of all endpoints
app.get('*', (req, res) => {
    res.send('This route does not exist');
    });

app.listen(PORT, () => {
  console.log('Server is running on port: ', PORT);
});