function Movie(id, title, startDate, endDate, sessions) {
    return {
        id,
        title,
        startDate,
        endDate,
        sessions,
    }
}

function MovieSessions(id, startTimeHours, startTimeMinutes,  duration) {
    return {
        id,
        startTimeHours,
        startTimeMinutes,
        duration: duration * 1000 * 60,
    }
}

const movies = [
   new Movie(1, 'Test1', Date.UTC(2020, 10, 3), Date.UTC(2022, 1, 10), [
        new MovieSessions(1, 14, 0, 90),
        new MovieSessions(2, 13, 0, 90),
        new MovieSessions(3, 23, 0, 90)
    ]),
   new Movie(2, 'Test2', Date.UTC(2020, 11, 3), Date.UTC(2022, 1, 10),[
        new MovieSessions(4, 14, 0, 90),
        new MovieSessions(5, 13, 0, 90),
        new MovieSessions(6, 17, 0, 90)
    ]),
   new Movie(3, 'Test3', Date.UTC(2020, 9, 3), Date.UTC(2022, 1, 10), [
        new MovieSessions(7, 14, 0, 90),
        new MovieSessions(8, 13, 0, 90),
        new MovieSessions(9, 17, 0, 90)
    ]),
   new Movie(4, 'Test4', Date.UTC(2020, 8, 3), Date.UTC(2021, 1, 10), [
        new MovieSessions(1, 14, 0, 90),
        new MovieSessions(2, 13, 0, 90),
        new MovieSessions(3, 17, 0, 90)
    ]),
]

module.exports = movies;
