//We write here the schema, the model 
const {Schema, model} = require ("mongoose")

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: {
        type: [String],
    },
    image: {
        type: String,
        default: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMTk2MTQ3Ml5BMl5BanBnXkFtZTgwNDQ2ODE0NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    
    description: String,
    showtimes: {
        type: [String],
    },
},
{
    timestamps: true
  }
)

const MoviesCollection = model("Movies", movieSchema )

module.exports = MoviesCollection