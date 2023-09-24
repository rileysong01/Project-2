const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/User', userRoutes);

module.exports = router;
