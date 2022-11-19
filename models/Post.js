const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {

        },
        content: {

        },
        user_id: {

        },
        comment_time: {
            
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'post'
    }
);

module.exports = Post;