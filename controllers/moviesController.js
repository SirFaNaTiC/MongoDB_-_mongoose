const Movie = require('../models/Movie');

const MovieData = {
  title: 'House',
};

// Affiche la liste de tous les films
module.exports.list = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ title: 'asc' });
    res.render('pages/moviesList', { movies });
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports.create = async (req, res) => {
  try {
    const movieData = {
      // _id : sera créé automatiquement
      title: 'House',
      synopsis: "c'est un film qui fait peur",
    };

    // Création du nouveau Movie dans la collection
    await Movie.create(movieData);

    // Recharger la liste après création
    const movies = await Movie.find().sort({ title: 'asc' });
    res.render('pages/moviesList', { movies });
  } catch (error) {
    res.status(400).send(error);
  }
};