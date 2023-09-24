const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const buildDeckRoute = require('./deck-build-page.js')

router.use('/', homeRoutes);
router.use('/', buildDeckRoute);
router.use('/api', apiRoutes);

module.exports = router;
