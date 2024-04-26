import StockProduse from "../entities/StockProduse.js";


async function createProdus(produs){
    return await Conturi.create(produs)
}
async function getProdus(){
    return await StockProduse.findAll();
}

async function getProdusById(id){
    return await StockProduse.findByPk(id);
}

async function deleteProdus(id){
    let elem = await StockProduse.findByPk(id);

    if (!elem){
        console.log("This elem does not exist")
        return;
    }

    return await elem.destroy();
}

export {
  createProdus,getProdusById,getProdus,deleteProdus
}