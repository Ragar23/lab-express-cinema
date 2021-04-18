//We write here the schema, the model 
const {Schema, model} = require ("mongoose")

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: {
        type: [String],
    },
    image: String,
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