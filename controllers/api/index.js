const router = require('express').Router();
//userRoutes 
const userRoutes = require('./userRoutes');
//postRoutes 
const postRoutes = require('./postRoutes');
//comment routes 
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

//export router. 
module.exports = router;