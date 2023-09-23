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

// GET all cards for the deck in the homepage
// router.get('/', async (req, res) => {
//   try {
//     const dbPlayerDecskData = await PlayerDecks.findAll({
//       include: [
//         {
//           model: Card,
//           attributes: ['name', 'carddDescription'],
//         },
//       ],
//     });

//     const playerDecks = dbPlayerDecksData.map((playerDecks) =>
//       playerDecks.get({ plain: true })
//     );
//     res.render('homepage', {
//       playerDecks,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/', async (req, res) => {
  try {
    // const dbCardData = await Card.findAll();

    // const playerDecks = dbPlayerDecksData.map((playerDecks) =>
    //   playerDecks.get({ plain: true })
    // );
    res.render('homepage');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/cards', async (req, res) => {
  try {
    
    const dbCardData = await Card.findAll();
    
    
    // res.render('homepage', {
    //   playerDecks,
    //   loggedIn: req.session.loggedIn,
    // });
    
    res.send(JSON.stringify(dbCardData))


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
