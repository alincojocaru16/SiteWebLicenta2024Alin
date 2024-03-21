import Produse from "../entities/Produse.js";

async function createProdus(produs){
    return await Produse.create(produs);
  }
  async function getProdus(){
    return await Produse.findAll();
}

async function getProdusById(id){
    return await Produse.findByPk(id);
}
async function deleteProduse(id){
    let elem = await Produse.findByPk(id);


    return await elem.destroy();
}

export{
    createProdus,getProdus,getProdusById,deleteProduse
}