const moviesMock = require('../mocks/movies.mock');

function movieListController(req, res) {
    res.json(moviesMock.filter((item)=> item.endDate >= new Date().getTime()));
}

module.exports = movieListController;