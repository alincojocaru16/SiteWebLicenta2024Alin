    import db from '../dbConfig.js';
    import Sequelize from 'sequelize';

    const Comanda = db.define("Comanda",{

        ComandaId:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        ClientId:{
            type: Sequelize.INTEGER,
            autoIncrement: false,
            allowNull: false
        },
        IdProduseComandate:{
            type: Sequelize.INTEGER,
            autoIncrement: false,
            allowNull: false
        },
        DataComenzii:{
            type: Sequelize.DATE,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false
        }
        


    })

    export default Comanda;