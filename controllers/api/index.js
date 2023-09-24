const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const deckRoutes= require('./buildDeck.js');

router.use('/User', userRoutes);
router.use('/Deck', deckRoutes)


module.exports = router;
