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


router.get('/', async (req, res) => {
    try {
      const dbCardData = await Card.findAll();
  
      const cData = dbCardData.map(u => u.get({plain: true}))
     
      console.log(cData)
      res.render('buildDeck', {cData});
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

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