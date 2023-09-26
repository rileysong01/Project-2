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

        card = req.query.card

      
        
        fliter = '(' + fliter + ')'


        
        //raw sql SELECT * FROM card WHERE cost in (1,4,6)
        //SELECT * from card WHERE power in (1,4,6) AND name LIKE "j%"
        sqlQuary = `SELECT * FROM card WHERE cost in ${fliter} AND name LIKE "${card}%"`

        const [results, metadata] = await sequelize.query(sqlQuary);

        cData = results

        res.render('ViewCard',{cData, loggedIn: req.session.loggedIn})
        

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});


router.get('/search/user/:username', async (req, res) => {
    
  try {
      
      const sqlQuary = `SELECT username FROM players WHERE username LIKE '${req.params.username}%'`

      const [results, metadata] = await sequelize.query(sqlQuary);
      
      
      console.log(results)
      // console.log(deckData)

      // res.json(results)
      res.render('ViewUser', results);
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
})

//const sqlQuary = `SELECT * FROM playerdecks INNER JOIN  players on players.id = playerdecks.player_id WHERE username LIKE '${req.params.username}%'`

//const [results, metadata] = await sequelize.query(sqlQuary);


//get cards for one user
router.get('/search/decks/:username', async (req, res) => {

  // sqlQuary = `SELECT id,deck_name,deck_cards FROM playerdecks WHERE player_id = ${req.session.user_id}`

  const sqlQuary = `SELECT username,deck_name,deck_cards FROM playerdecks INNER JOIN  players on players.id = playerdecks.player_id WHERE username = '${req.params.username}'`
  
  sequelize.query(sqlQuary).then(fristQresults => fristQresults)
    .then( fqr => {
        
        [results, metadata] = fqr

        var waitlength = results.length

        a = (data) => new Promise((resolve, reject) => {
            var allInfo = []
            for (let i = 0; i < data.length; i++) {
            let DeckObject = {Username: '',DeckID: 0, DeckName: '', DeckImageID: null}

            let cards = data[i].deck_cards.toString()
            DeckObject.DeckID = data[i].id;
            DeckObject.DeckName = data[i].deck_name;
            DeckObject.Username = data[i].username;
            // console.log(str)
            
            cards = cards.substring(1, cards.length - 1);

            cards  =  '(' + cards + ')'

            // console.log(cards)

            sqlQuary2 = `SELECT card_def_image_i_d from card WHERE id in ${cards}`
            
            sequelize.query(sqlQuary2).then((r) => {
                const [results, metadata] = r
                // console.log(results)
                DeckObject.DeckImageID =results 
                allInfo.push(DeckObject)
                // console.log(allInfo[0].DeckImageID)

                console.log(allInfo.length)

                if(allInfo.length === waitlength){
                    resolve(allInfo)
                }
            })


            }

            // resolve('letss gooo')

        });
        

        // a(fqr).then( value => console.log(value))

        // console.log(results)

        a(results).then(e => res.render('viewUserDecks', {e, loggedIn: req.session.loggedIn}))       
    })
    .catch( err => {
        console.log(err);
        res.status(500).json(err);
    })
  

})





module.exports = router 