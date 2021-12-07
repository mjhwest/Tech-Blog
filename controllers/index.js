const router = require('express').Router();

//get all api routes 
const apiRoutes = require('./api');
//get all homeRoutes 
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;