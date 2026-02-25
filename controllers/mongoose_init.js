const mongoose = require('mongoose');

// const host = process.env.MONGO_HOST ;
// const user = process.env.MONGO_USER ;
// const pwd = process.env.MONGO_PWD ;

const db_name = 'movies_db' ;

const mongoDB = `mongodb://localhost:27017/${db_name}` ;
mongoose.connect(mongoDB, { useUnifiedTopology: true })
    .then(() => console.log('MongoDB OK !'))
    .catch(() => console.log('MongoDB ERREUR !'));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));