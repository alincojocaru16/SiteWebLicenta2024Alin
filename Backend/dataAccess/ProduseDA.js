import Produse from "../entities/Produse.js";
import StockProduse from "../entities/StockProduse.js";

async function createProdus(produs){
    return await Produse.create(produs, {include: [{model: StockProduse, as: "ProduseStock"}]});
  }
  async function getProdus(){
    return await Produse.findAll({include:["ProduseStock"]});
}

async function getProdusById(id){
    return await Produse.findByPk(id,{include: [{model: StockProduse, as: "ProduseStock"}]});
}
async function deleteProduse(id){
    let elem = await Produse.findByPk(id);


    return await elem.destroy();
}

export{
    createProdus,getProdus,getProdusById,deleteProduse
}