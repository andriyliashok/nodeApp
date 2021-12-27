function Movie(id,name, age) {
    return {
        id,
        name,
        age
    }
}

const movies = [
    new Movie(2, 'Commando', 18),
    new Movie(2, 'Matrix', 18),
    new Movie(2, 'Lord of the Rings', 12),
    new Movie(2, 'Agent 007', 20),
];

function getMovieById(id) {
    for (const movie of movies) {
        if (movie.id === id) {
            return movie;
        }
    }

    return null;
}

function checkAge(id, age) {
    const movie = getMovieById(id);

    return movie && movie.age < Number(age);
}

function movieCheckerController(){
    return (req, res) => {
        const {movieId, clientAge} = req.params;

        const result = checkAge(movieId, clientAge);

    }
}

module.exports = {
    movieCheckerController
}