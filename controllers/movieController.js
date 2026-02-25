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


module.exports.delete = async (req, res, next)=> { // async + await : une autre manière de gérer les Promise
    const id = req.params.id ;
    try{
        const id = req.params.id ;
        await Movie.findByIdAndDelete(id) ; // bloquant et génère une exception en cas de pb
        res.redirect('/movies') ;
    } catch (error) { res.status(400).send(error) }

}