import Comanda from "../entities/Comanda.js";
import Produse from "../entities/Produse.js";
import LikeOp from "./Operators.js";


async function createComanda(comanda){
    return await Comanda.create(comanda, {include: [{model: Produse, as: "ProduseComanda"}]})
}

async function getComanda(){
    return await Comanda.findAll({include: ["ProduseComanda"]});
}

async function getComandaById(id){
    return await Comanda.findByPk(id, {include: ["ProduseComanda"]});
}

async function deleteComanda(id){
    let elem = await Comanda.findByPk(id);

    if (!elem){
        console.log("This elem does not exist")
        return;
    }

    return await elem.destroy();
}

export {
    createComanda,
    getComanda,
    getComandaById,
    deleteComanda
}