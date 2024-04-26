import express from 'express'
import {createProdus,getProdusById,getProdus,deleteProdus} from "../dataAccess/StockProduseDA.js"


let stockRouter = express.Router();


stockRouter.route('/stock').post( async (req, res) => {
    return res.json(await createProdus(req.body));
  })
  
  stockRouter.route('/stock').get( async (req, res) => {
    return res.json(await getProdus());
  })
  
  stockRouter.route('/stock/:id').get( async (req, res) => {
    return res.json(await getProdusById(req.params.id));
  })
  
  stockRouter.route('/stock/:id').delete( async (req, res) => {
      return res.json(await deleteProdus(req.params.id));
    })
  
 export default stockRouter;