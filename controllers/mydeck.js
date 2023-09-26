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


 
router.get('/',withAuth, async (req, res) => {


   

    console.log(req.session.user_id)

    sqlQuary = `SELECT id,deck_name,deck_cards FROM playerdecks WHERE player_id = ${req.session.user_id}`
    
    sequelize.query(sqlQuary).then(fristQresults => fristQresults)
    .then( fqr => {
        
        [results, metadata] = fqr

        var waitlength = results.length

        a = (data) => new Promise((resolve, reject) => {
            var allInfo = []
            for (let i = 0; i < data.length; i++) {
            let DeckObject = {DeckID: 0, DeckName: '', DeckImageID: null}

            let cards = data[i].deck_cards.toString()
            DeckObject.DeckID = data[i].id;
            DeckObject.DeckName = data[i].deck_name;
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

        a(results).then(e => res.render('viewdecks', {e}))       
    })
    .catch( err => {
        console.log(err);
        res.status(500).json(err);
    })

  });


  module.exports = router;