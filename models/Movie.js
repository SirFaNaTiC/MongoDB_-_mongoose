const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    synopsis:{ type: String, default: "Pas de synopsis disponible."},
});

module.exports = mongoose.model('Movie', movieSchema);