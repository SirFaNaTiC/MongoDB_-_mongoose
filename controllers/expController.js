const path = require('path'); // Ajout de l'importation du module path
const fs = require('fs').promises;

module.exports.example = async (req, res) => {
    const filePath = path.resolve(__dirname, '../public/data/jokes.json');
    const contents = await fs.readFile(filePath);
    const jokes = JSON.parse(contents);
    res.render('pages/jokes', { jokes: jokes });
}

module.exports.random = async (req, res) => {
    const filePath = path.resolve(__dirname, '../public/data/jokes.json');
    const contents = await fs.readFile(filePath);
    const jokes = JSON.parse(contents);
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    res.render('pages/jokesRandom', { joke: randomJoke });
}

module.exports.getJokeById = async (req, res) => {
    const filePath = path.resolve(__dirname, '../public/data/jokes.json');
    const contents = await fs.readFile(filePath);
    const jokes = JSON.parse(contents);
    const jokeId = req.params.id;
    const joke = jokes.find(j => j.id === jokeId);
    res.render('pages/jokesDetail', { joke: joke });
}