const router = require('express').Router();

const withAuth = require('../utils/auth');

const sequelize = require('../config/connection');

const {
    Card,
    /* Category, */
    /* Deck, */
    PlayerDecks,
    /* FeatureCard, */
    Players,
  } = require('../models');


  //SELECT id,deck_name,deck_cards FROM playerdecks WHERE player_id = 2

  router.get('/', async (req, res) => {


    try{

    req.session.playerid

    sqlQuary = `SELECT id,deck_name,deck_cards FROM playerdecks WHERE player_id = ${req.session.playerid}`
    
    const [results, metadata] = await sequelize.query(sqlQuary)


    console.log(results)


    res.json({})
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  });



  module.exports = router;