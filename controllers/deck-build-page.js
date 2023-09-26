const router = require('express').Router();
const { response } = require('express');
const sequelize = require('../config/connection');

const {
  Card,
  /* Category, */
  /* Deck, */
  PlayerDecks,
  /* FeatureCard, */
  Players,
} = require('../models');
const { route } = require('./api');
const { json } = require('sequelize');


router.get('/', async (req, res) => {
    console.log(req.query)
    try {
      const dbCardData = await Card.findAll();
  
      const cData = dbCardData.map(u => u.get({plain: true}))
     
      res.render('buildDeck', {cData});
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});


//this shows all the cards from one player
router.get('/showAllDecks', async (req, res) => {
    
    try {
        
        const sqlQuary = 'SELECT * FROM playerdecks INNER JOIN  players on players.id = playerdecks.player_id'

        const [results, metadata] = await sequelize.query(sqlQuary);
        
        // const decks = await PlayerDecks.findAll({include: Players});
    
        // const deckData = results.map(u => u.get({plain: true}))
        
        console.log(results[0])
        // console.log(deckData)

        res.json(results)
    
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})


router.get('/search/user/:username', async (req, res) => {
    
    try {
        
        const sqlQuary = `SELECT username FROM players WHERE username LIKE '${req.params.username}%'`

        const [results, metadata] = await sequelize.query(sqlQuary);
        
        
        console.log(results[0])
        // console.log(deckData)

        res.json(results)
    
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})


//get cards for one user
router.get('/search/decks/:username', async (req, res) => {
    
    try {
        
        const sqlQuary = `SELECT deck_name FROM playerdecks INNER JOIN  players on players.id = playerdecks.player_id WHERE username LIKE '${req.params.username}%'`

        const [results, metadata] = await sequelize.query(sqlQuary);
        
        // const decks = await PlayerDecks.findAll({include: Players});
    
        // const deckData = results.map(u => u.get({plain: true}))
        
        console.log(results[0])
        // console.log(deckData)

        res.json(results)
    
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})


router.post('/', async (req, res) =>{
    
    //if logged in s
    try{
        console.log("Player ID:" + req.session.playerid)

        let IDofPlayer = req.session.playerid
        let deckName = req.body.deckName
        let deckCards = req.body.deckCards
        let cardIDS = JSON.stringify(req.body.cardIDs)

        let sqlQuary = `INSERT INTO playerdecks (deck_name, deck_cards, player_id) VALUES ('${deckName}','${cardIDS}',${IDofPlayer});`
        const [results, metadata] = await sequelize.query(sqlQuary);
        // username?, deck_name, array of card ids 
        // const deck = await PlayerDecks.create({deckName: deckName, deckCards: cardIDS, playerId: IDofPlayer })
        // console.log(deck)
        res.JSON(results)
    }catch (err){
        console.error(err);
    }

    res.json(req.body)

})

// router.delete('/', )

router.get('/redir', async (req, res) => {
    res.redirect('/deckbuild?id=1,2,3,4,5,6');
})


module.exports = router;