const { Model, DataTypes } = require('sequelize');
const { STRING } = require('../../../../Class/13-ORM/01-Activities/01-Models/Unsolved/node_modules/sequelize/dist');
const sequelize = require('../config/connection');

// create our User model
//inherits a number of methods for creating, reading, updating and deleting data from a database.
class User extends Model {}

// define table columns and configuration
User.init(
  {
    // define an id column
    id: {
        //use the special Sequelize DataTypes object provide what type of data it is
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    //define a username column
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    //define an email column
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        // if allowNull is set to false, we can run our data through validators before creating the table data
        validate: {
            isEmail: true
        },  
    },
    //define a password column
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // password must be at least 4 characters long
            len: [4],
        }
    }
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'user'
  }
);

module.exports = User;