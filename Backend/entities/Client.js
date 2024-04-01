import db from '../dbConfig.js'
import  Sequelize  from 'sequelize'

const Client = db.define("Client",{
    ClientId:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    ContId:
    {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        primaryKey: true,
        allowNull: false
    },
    NumeClient:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    PrenumeClient:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Adresa:{
        type: Sequelize.STRING,
        allowNull: false
    },
    EmailClient:{
        type: Sequelize.STRING,
        allowNull: false
    },
    NumarTelefon:{
        type: Sequelize.STRING,
        allowNull: false
    }




});
export default Client;