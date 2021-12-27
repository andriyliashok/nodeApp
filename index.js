const { movieCheckerController } = require('./controllers/movieChecker.js')
const axios = require('axios');

const express = require('express')
const app = express()
const PORT = 3001


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/get-name/:name/:surname', (req, res) => {
    const {name, surname } = req.params;
    res.send(`My name is ${name} ${surname}!`);
})

app.get('/user-age/:id/:age', movieCheckerController())

app.get('/jokes/random', (req, res) => {
    axios.get('https://api.chucknorris.io/jokes/random')
        .then(response => {
            res.send(response.data.value)
        })
        .catch(error => {
            console.log(error);
        });
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})