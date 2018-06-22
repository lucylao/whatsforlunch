const db = require('./index');

const getAllMovies = (req,res,next) => {
    db.any("SELECT * FROM movies")
    .then(function(data) {
        console.log('data', data)
    res.status(200).json({
        status: "success",
        data:data,
    });
    })
    .catch(function(err) {
        return(err)
    });
}

const getRatings = (req,res,next) => {
    db.any("SELECT movies.id, title, rating, review_text FROM ratings JOIN movies ON ratings.movie_id = movies.id")
    .then(function(data) {
        console.log('data', data)
    res.status(200).json({
        status: "success",
        data:data,
    });
    })
    .catch(function(err) {
        return(err)
    });
}

module.exports = {
    getAllMovies,
    getRatings
}