const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const buildDeckRoute = require('./deck-build-page.js')
const searchRoute = require('./search-route')

router.use('/', homeRoutes);
router.use('/deckbuild', buildDeckRoute);
router.use('/api', apiRoutes);
router.use('/search', searchRoute);

module.exports = router;
