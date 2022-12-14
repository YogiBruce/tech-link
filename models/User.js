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
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }

    },
    {
        //Hash Password
        hooks: {
            beforeCreate: async (userData) => {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(userData.password, salt);
                userData.password = hashedPassword;
            },
            beforeUpdate: async (userData) => {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(userData.password, salt);
                userData.password = hashedPassword;
            }
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: false,
        modelName: 'user',
    }
);

module.exports = User;