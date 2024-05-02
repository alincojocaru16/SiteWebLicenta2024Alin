import Client from "../entities/Client.js";
import Comanda from "../entities/Comanda.js";
import LikeOp from "./Operators.js";

async function createClient(client){
    return await Client.create(client, {include: [{model: Comanda, as: "Comenzi"}]})
}
async function getClient(){
    return await Client.findAll({include: ["Comenzi"]});
}

async function getClientById(id){
    return await Client.findByPk(id, {include: ["Comenzi"]});
}

async function deleteClient(id){
    let elem = await Client.findByPk(id);

    if (!elem){
        console.log("This elem does not exist")
        return;
    }

    return await elem.destroy();
}
async function getClientByEmailAndPasswords() {
    return await Client.findAll({
        attributes: ['EmailClient', 'ParolaCont']
    });
}



export {
    getClientByEmailAndPasswords,
   createClient,
   getClient,
   deleteClient,
   getClientById
}