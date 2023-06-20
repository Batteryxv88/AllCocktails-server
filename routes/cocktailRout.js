const express =  require('express')
const router = express.Router()
const Cocktail = require('../models/cocktailModels')
const controller = require('../authController')
const {check} = require('express-validator')

router.route("/create").post((req, res) => {
    const name = req.body.name;
    const id = req.body.id;
    const season = req.body.season;
    const src = req.body.src;
    const src_sqv = req.body.src_sqv;
    const clas = req.body.class;
    const description = req.body.description;
    const ingredients = req.body.ingredients;
    const comment = req.body.comment;

    const newCocktail = new Cocktail({
        name,
        id,
        season,
        src,
        src_sqv, 
        clas,
        description,
        ingredients,
        comment
    })
    newCocktail.save()
})

router.route("/cocktails").get((req, res) => {
    Cocktail.find()
    .then(foundCocktails => res.json(foundCocktails))
})

router.post('/registration', [
    check('username', 'Имя пользователя не может быть пустым').notEmpty()
], controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

module.exports = router;