const axios = require("axios");

function jodController(req, res) {
    axios.get('https://api.chucknorris.io/jokes/random')
        .then(response => {
            res.json(response.data.value)
        })
        .catch(error => {
            console.log(error);
        });
}

module.exports = jodController;