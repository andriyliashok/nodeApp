const getMovieById = require('../services/movie.service')

function movieByIdController(req, res) {
    res.json(getMovieById(req.params.id));
}

module.exports = movieByIdController;