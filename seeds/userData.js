const { User } = require('../models')

const userData = [
    {
        "username": "someName1",
        "email": "someName1@test.com",
        "password": "qwertyuiop"
    },
    {
        "username": "someName2",
        "email": "someName2@test.com",
        "password": "qwertyuiop"
    },
    {
        "username": "someName3",
        "email": "someName3@test.com",
        "password": "qwertyuiop"
    },
    {
        "username": "someName4",
        "email": "someName4@test.com",
        "password": "qwertyuiop"
    },
    {
        "username": "someName5",
        "email": "someName5@test.com",
        "password": "qwertyuiop"
    }
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
});

module.exports = seedUser;