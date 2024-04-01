import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Conturi = db.define("Conturi",
{

    ContId:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },


    ClientId:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    },
    ParolaCont:{
        type:Sequelize.STRING
    }


})

export default Conturi;