const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    async checkPassword(password){
        try {
            const matchPassword = await bcrypt.compare(password, this.password);
            return matchPassword;
        }
        catch (err) { console.error(err); }
    }
}

User.init(
    {
        id: {
            
        },
        username:{

        },
        email: {

        },
        password: {

        },

    },
    {
        hooks: {
            beforeCreate: async (UserData) => {

            },
            beforeUpdate: async (userData) => {

            }
        },
        sequelize,
        freezeTableName: true,
        timestamps: false,
        modelName: 'user',
    }
);