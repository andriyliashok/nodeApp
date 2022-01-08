const { movieCheckerController } = require('./controllers/movieChecker.js');
const movieListController = require('./controllers/movieListController.js');
const movieByIdController = require('./controllers/movieByIdController.js');
const movieSessionsByIdController = require('./controllers/movieSessionsByIdController.js');
const jodController = require('./controllers/jodController.js');

const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/get-name/:name/:surname', (req, res) => {
    const {name, surname } = req.params;
    res.send(`My name is ${name} ${surname}!`);
})

app.get('/user-age/:id/:age', movieCheckerController);

app.get('/jokes/random', jodController);

app.get('/movies', movieListController);

app.get('/movies/:id', movieByIdController);

app.get('/sessions/:id/sessions', movieSessionsByIdController);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})