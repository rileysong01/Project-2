const router = require('express').Router();
const { Players } = require('../../models');

// CREATE new user
/**
router.post('/', async (req, res) => {
  try {
    const dbUserData = await Players.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    
    playerID = dbUserData.dataValues.id;
    
    

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.playerid = playerID;
      // NEED TO ALSO SAVE USERID in cookie session!!
      res.status(200).json(dbUserData);
    });
    console.log(req.session)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

**/

router.post('/', (req, res) => {
  
    Players.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }).then(userData => {
      req.session.save(() => {
      
        req.session.loggedIn = true;
        req.session.playerid = userData.dataValues.id;
        
  
        
        // NEED TO ALSO SAVE USERID in cookie session!!
        res.status(200).json(userData);
      });
      console.log(req.session)
    }).catch(err =>  {
      console.log('Error on post method user -> ',err);
      res.status(500).json(err);
    })
});

// Login
router.post('/login', async (req, res) => {
  
    Players.findOne({
      where: {
        username: req.body.username,
      },
    }).then(userData =>{
      if(userData){
        playerID = userData.dataValues.id;
      }
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      return userData.checkPassword(req.body.password);
    }).then(udb => {
    
  
      if (!udb) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.playerid = playerID;
        res
        .status(200)
        .json({ user: udb, message: 'You are now logged in!' });
        console.log(req.session)
      });
    })
    
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    })
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
