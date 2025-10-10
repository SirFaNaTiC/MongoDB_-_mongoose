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