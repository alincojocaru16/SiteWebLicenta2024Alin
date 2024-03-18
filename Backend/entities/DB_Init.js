import mysql from 'mysql2/promise.js'
import env from 'dotenv';
import Client from './Client.js';
import Comanda from './Comanda.js';
import Produse from './Produse.js';

env.config();

function Create_DB(){
    let conn;

    mysql.createConnection({
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD
    })
    .then((connection) => {
    conn = connection
    return connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE}`)
    })
    .then(() => {
    return conn.end()
    })
    .catch((err) => {
    console.warn(err.stack)
    })
}

function FK_Config(){
    Client.hasMany(Comanda,{
        as:"Comenzi", foreignKey:"ClientId"
    })
    Comanda.belongsTo(Client, { foreignKey:"ClientId"})

    Comanda.hasMany(Produse,{
        as:"Produse", foreignKey:"ComandaId"
    }) 
    Produse.belongsTo(Comanda, {foreignKey:"ComandaId"})

    // Comanda.belongsToMany(Produse,{through:"ProduseComanda", as:"Produse", foreignKey:"ComandaId"})
    // Produse.belongsToMany(Comanda,{through:"ProduseComanda", as:"Comenzi", foreignKey:"IdProdus"})


};


function DB_Init(){
    Create_DB();
    FK_Config();
}
export default DB_Init;