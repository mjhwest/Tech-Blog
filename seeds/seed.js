const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');


const postData = require('./postData.json');
const userData = require('./userData.json');
const commentData = require('./commentData.json');


const seedDatabase = async() => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of postData) {
        await Post.create({
            ...post,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    const postNumber = await Post.count();

    for (const comment of commentData) {
        await Comment.create({
            ...comment,
            user_id: users[Math.floor(Math.random() * users.length)].id,
            post_id: Math.ceil(Math.random() * postNumber),
        });
    }


    process.exit(0);
};

seedDatabase();