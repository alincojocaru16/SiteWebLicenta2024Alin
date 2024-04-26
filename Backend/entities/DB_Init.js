import mysql from 'mysql2/promise.js'
import env from 'dotenv';
import Client from './Client.js';
import Comanda from './Comanda.js';
import Produse from './Produse.js';
import Conturi from './Conturi.js';
import StockProduse from './StockProduse.js';
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

    Conturi.belongsTo(Client,{foreignKey:"ClientId"});
    Client.belongsTo(Conturi,{foreignKey:"ContId"});


    Produse.hasMany(StockProduse,{
        as:"ProduseStock", foreignKey:"IdProdus"
    })
    StockProduse.belongsTo(Produse, { foreignKey:"IdProdus"})



    Comanda.hasMany(Produse,{
        as:"ProduseComanda", foreignKey:"IdProduseComandate"
    }) 
    Produse.belongsTo(Comanda, {foreignKey:"IdProduseComandate"})

   
};


function DB_Init(){
    Create_DB();
    FK_Config();
}
export default DB_Init;