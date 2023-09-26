const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const buildDeckRoute = require('./deck-build-page.js')
const searchRoute = require('./search-route')
const mydeckRoute = require('./mydeck')

router.use('/', homeRoutes);
router.use('/deckbuild', buildDeckRoute);
router.use('/api', apiRoutes);
router.use('/search', searchRoute);
router.use('/mydeck', mydeckRoute);

module.exports = router;
