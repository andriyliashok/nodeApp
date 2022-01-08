const moviesMock = require("../mocks/movies.mock");

function getMovieById(id) {
  return moviesMock.find((item)=> item.id === Number(id));
}

module.exports = getMovieById;