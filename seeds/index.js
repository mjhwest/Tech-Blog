// reference activity 18: 


const sequelize = require('../config/connection');


const seedPosts = require('./postSeeds');
const seedUsers = require('./userSeeds');
const seedComments = require('./commentSeeds');

const seedEverything = async() => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');



    await seedUsers();

    console.log('\n----- USERS SEEDED -----\n');

    await seedComments();

    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
};

seedEverything();