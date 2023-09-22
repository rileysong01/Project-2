const router = require('express').Router();
const {
  Card,
  Category,
  Deck,
  Decks,
  FeatureCard,
  Players,
} = require('../models');

// GET all cards for the deck in the homepage
router.get('/', async (req, res) => {
  try {
    const dbDeckData = await Deck.findAll({
      include: [
        {
          model: Card,
          attributes: ['name', 'carddDescription'],
        },
      ],
    });

    const deck = dbDeckData.map((deck) => deck.get({ plain: true }));
    res.render('homepage', {
      deck,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one card
router.get('/deck/:id', async (req, res) => {
  try {
    const dbDeckData = await Deck.findByPk(req.params.id, {
      include: [
        {
          model: Card,
          attributes: [
            'id',
            'name',
            'cost',
            'power',
            'ability',
            'cardDescription',
          ],
        },
      ],
    });

    const deck = dbDeckData.get({ plain: true });
    res.render('deck', { deck, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
