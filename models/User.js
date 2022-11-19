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
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username:{
            types: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING(64),
            validate: {
                len: [8]
            }
        }

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