const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>');
});

app.get('/post', (req, res) => {
    res.send('<h1>Post page</h1>');
});

app.get('/user', (req, res) => {
    res.send('<h1>user page</h1>');
});

app.use((req, res) => {
    res.status(404).send('<h1>404 not found</h1>');
});

app.listen(3000, () => {
    console.log('server running on http://localhost:3000');
});
