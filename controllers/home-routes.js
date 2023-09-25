const router = require('express').Router();
const { response } = require('express');
const withAuth = require('../utils/auth');

const {
  Card,
  /* Category, */
  /* Deck, */
  PlayerDecks,
  /* FeatureCard, */
  Players,
} = require('../models');

router.get('/',async (req, res) => {
  try {
    const dbCardData = await Card.findAll();

    const cData = dbCardData.map((u) => u.get({ plain: true }));
    console.log(cData);
    res.render('homepage', { cData, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/cards', async (req, res) => {
  try {
    const dbCardData = await Card.findAll();

    res.send(JSON.stringify(dbCardData));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one card
router.get('/playerDecks/:id', async (req, res) => {
  try {
    const dbPlayerDecksData = await PlayerDecks.findByPk(req.params.id, {
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

    const playerDecks = dbPlayerDecksData.get({ plain: true });
    res.render('playerdecks', { playerDecks, loggedIn: req.session.loggedIn });
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
