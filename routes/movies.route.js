const express = require('express');
const router = express.Router();

//requiring the movies model 

const MoviesCollection = require("../models/Movie.model.js")

//---READ ROUTES---//
router.get("/movies", (req, res, next) =>{
//To show the elements, we need to get them first from the DB 
    console.log("routes working")
    MoviesCollection.find() //this is a promise, we need to consume it 
    .then((allMovies)=>{
        res.render("movies.hbs", {allMovies} )
        console.log(allMovies)
    })

})

module.exports = router;
