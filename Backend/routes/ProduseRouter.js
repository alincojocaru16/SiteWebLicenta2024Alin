import express from 'express';
import {createProdus,getProdus,getProdusById,deleteProduse} from "../dataAccess/ProduseDA.js"

let produseRouter = express.Router();

produseRouter.route('/produse').post(async (req, res) => {
    return res.json(await createProdus(req.body));
  })
  produseRouter.route('/produse').get( async  (req, res) => {
    return res.json(await getProdus());
  })
  
  produseRouter.route('/produse/:id').get( async (req, res) => {
    return res.json(await getProdusById(req.params.id));
  })
  
  produseRouter.route('/produse/:id').delete( async (req, res) => {
      return res.json(await deleteProduse(req.params.id));
    })


    export default produseRouter;