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


router.get('/', async (req, res) => {
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
        
        const sqlQuary = `SELECT * FROM playerdecks INNER JOIN  players on players.id = playerdecks.player_id WHERE username LIKE '${req.params.username}%'`

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
    
    //if logged in 
    try{
        console.log(req.body)
        // username?, deck_name, array of card ids 

    }catch (err){
        console.error(err);
    }

    res.json(req.body)

})




// router.get('/getDeck', async (req, res) =>{
    
//     //if logged in 
//     try{
//         console.log(req.body)

//     }catch (err){
//         console.error(err);
//     }

// })


module.exports = router;