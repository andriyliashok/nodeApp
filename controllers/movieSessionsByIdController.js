const getMovieById = require('../services/movie.service')

function movieSessionsByIdController(req, res) {
    const { sessions } = getMovieById(Number(req.params.id));
    res.json(sessions.filter((item)=> {
        const currentDate = new Date();
        const startDate = new Date (
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            item.startTimeHours,
            item.startTimeMinutes,
        )

        return startDate.getTime() <= new Date().getTime();
    } ));
}

module.exports = movieSessionsByIdController;