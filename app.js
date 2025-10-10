// Inclusion du module 'express' pour créer le serveur web
const express = require('express');

// Création de l'application Express
const app = express();


// Inclusion du module 'path' pour gérer les chemins de fichiers
const path = require('path');



// Servir des fichiers statiques (CSS, images, JS côté client, etc.)
// Le dossier 'public' est utilisé pour servir les fichiers statiques
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs'); // moteur de template
app.set('views', path.join(__dirname,'views')); // dossier des vues

//EJS
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout','./layouts/layout'); // layout par défaut

const mainRouter = require('./routes/mainRouter');
const moviesRouter = require('./routes/moviesRouter');

app.use('/', mainRouter);
app.use('/movies', moviesRouter);

// Routeur pour la page d'accueil
app.get('/*path', (req, res) =>{
    res.redirect('/');
});

// Export de l'application pour qu'elle puisse être utilisée par d'autres modules
module.exports = app;