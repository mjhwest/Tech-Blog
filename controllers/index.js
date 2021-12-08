const router = require('express').Router();
//get all api routes 
const apiRoutes = require('./api');
//get all homeRoutes 
const homeRoutes = require('./homeRoutes');
//get dashboard Routes 
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes)

module.exports = router;