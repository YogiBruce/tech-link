const sequelize = require('../config/connection');
const seedUser = require('./userSeedData.json');
const seedPost = require('./postSeedData.json');
const seedComments = require('./commentSeedData.json');

const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log("\n-----Database Syced-----\n");

    await User.bulkCreate(seedUser, { individualHooks: true });
    console.log("\n-----Users Seeded-----\n");

    await Post.bulkCreate(seedPost, { individualHooks: true });
    console.log("\n-----Posts Seeded-----\n");

    await Comment.bulkCreate(seedComments, { individualHooks: true });
    console.log("\n-----Comments Seeded-----\n");

    process.exit(0);
};

seedDatabase();