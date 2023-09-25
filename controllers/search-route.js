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
    
    fliter = req.query

    sqlFilter

    fliter.foreach(ele)

    res.render('searchpage');

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






module.exports = router 