import Conturi from "../entities/Conturi.js";


async function createCont(cont){
    return await Conturi.create(cont)
}
async function getCont(){
    return await Conturi.findAll();
}

async function getContById(id){
    return await Conturi.findByPk(id);
}

async function deleteCont(id){
    let elem = await Conturi.findByPk(id);

    if (!elem){
        console.log("This elem does not exist")
        return;
    }

    return await elem.destroy();
}

export {
  createCont,getContById,getCont,deleteCont
}