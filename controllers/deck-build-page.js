const router = require('express').Router();
const { response } = require('express');
const {
  Card,
  /* Category, */
  /* Deck, */
  PlayerDecks,
  /* FeatureCard, */
  Players,
} = require('../models');


router.get('/deckbuild', async (req, res) => {
    try {
      const dbCardData = await Card.findAll();
  
      const cData = dbCardData.map(u => u.get({plain: true}))
     
      res.render('homepage', {cData});
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });