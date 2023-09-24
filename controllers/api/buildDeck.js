const router = require('express').Router();
const { Card } = require('../../models');


router.post('/addDeck', async (req, res) =>{
    
    //if logged in 
    try{
        console.log(req.body)

    }catch (err){
        console.error(err);
    }

    res.json(req.body)

})

router.get('/getDeck', async (req, res) =>{
    


    //if logged in 
    try{
        console.log(req.body)

    }catch (err){
        console.error(err);
    }


})



module.exports = router;
