const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async(req, res) => {
    try {
        // Get all posts and JOIN with user data
        const postData = await Post.findAll({
            attributes: [
                'id',
                'title',
                'content',
                'created_at'
            ],
            include: [{
                model: User,
                attributes: ['username'],
                //need to add in more attributes based on seeds?..
            }, ],
            include: [{
                    model: Comment,
                    // attributes: [LIST HERE], 
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },

            ]
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/new', (req, res) => {
    res.render('new-post');
});

module.exports = router;