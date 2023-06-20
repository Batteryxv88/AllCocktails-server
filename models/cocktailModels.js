const mongoose = require('mongoose');

const Ingredients = [{
  name: String,
  vol: Number,
  measure: String,
}]


const Comment = [{
  id: Number,
  author: String,
  date: Date,
  comment: String,
  icon: String,
}];

const cocktailsSchema = {
  name: String,
  id: String,
  season: String,
  src: String,
  src_sqv: String,
  clas: String,
  description: String,
  ingredients: Ingredients,
  comment: Comment,
};

const Cocktail = mongoose.model('Cocktail', cocktailsSchema)

module.exports = Cocktail;
