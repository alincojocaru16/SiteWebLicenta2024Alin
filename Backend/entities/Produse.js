import db from '../dbConfig.js';
import Sequelize from 'sequelize';
 

const Produse = db.define("Produse",{
    IdProdus:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    ComandaId:{
        type: Sequelize.INTEGER,
        autoIncrement: false,
        allowNull: false
    },
    NumeProdus:{
        type: Sequelize.STRING,
        allowNull: false
    },
    CodProdus:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    PretProdus:{
        type: Sequelize.REAL,
        allowNull: false
    }
})

export default Produse;