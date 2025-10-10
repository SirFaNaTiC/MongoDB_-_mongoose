const Movie = require('../models/Movie');

exports.getMovieById = (req, res) => {
    const movieId = req.params.id;
    Movie.findById(movieId)
        .then(movie => {
            if (!movie) {
                return res.status(404).send("Movie not found");
            }
            res.render("pages/movie", { movie , chemin: 'movie' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Server error");
        });
};