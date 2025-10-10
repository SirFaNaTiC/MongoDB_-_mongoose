const mongoose = require('mongoose');

const host = process.env.MONGO_HOST ;
const user = process.env.MONGO_USER ;
const pwd = process.env.MONGO_PWD ;

const db_name = 'movies_db' ;

const mongoDB = `mongodb+srv://${user}:${pwd}@${host}/${db_name}?retryWrites=true&w=majority` ;
mongoose.connect(mongoDB, { useUnifiedTopology: true })
    .then(() => console.log('MongoDB OK !'))
    .catch(() => console.log('MongoDB ERREUR !'));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));