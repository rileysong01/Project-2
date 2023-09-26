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
    
  
    res.render('searchpage', {loggedIn: req.session.loggedIn});

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/findCards', async (req, res) => {
    try {
      
        fliter = req.query.filter

      
        
        fliter = '(' + fliter + ')'


        
        //raw sql SELECT * FROM card WHERE cost in (1,4,6)

        sqlQuary = `SELECT * FROM card WHERE cost in ${fliter}`

        const [results, metadata] = await sequelize.query(sqlQuary);

        cData = results

        res.render('ViewCard',{cData})
        

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});


router.get('/search/user/:username', async (req, res) => {
    
  try {
      
      const sqlQuary = `SELECT username FROM players WHERE username LIKE '${req.params.username}%'`

      const [results, metadata] = await sequelize.query(sqlQuary);
      
      
      console.log(results[0])
      // console.log(deckData)

      res.json(results)
      res.render('ViewUser');
  
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





module.exports = router 