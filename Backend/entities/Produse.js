import db from '../dbConfig.js';
import Sequelize from 'sequelize';
 

const Produse = db.define("Produse",{
    IdProduseComandate:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    },
    IdProdus:{
        type: Sequelize.INTEGER,
        autoIncrement: false,
        primaryKey: true,
        allowNull: false
    },
    Cantitate:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

export default Produse;