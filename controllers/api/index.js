const router = require('express').Router();
//userRoutes 
const userRoutes = require('./userRoutes');
//postRoutes 
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);


//export router. 
module.exports = router;