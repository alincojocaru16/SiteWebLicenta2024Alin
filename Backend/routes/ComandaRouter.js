import express from 'express'
import {createComanda,
    getComanda,
    getComandaById,
    deleteComanda} from "../dataAccess/ComandaDA.js"


let comandaRouter = express.Router();


comandaRouter.route('/comanda').post( async (req, res) => {
    return res.json(await createComanda(req.body));
  })
  
  comandaRouter.route('/comanda').get( async (req, res) => {
    return res.json(await getComanda());
  })
  
  comandaRouter.route('/comanda/:id').get( async (req, res) => {
    return res.json(await getComandaById(req.params.id));
  })
  
  comandaRouter.route('/comanda/:id').delete( async (req, res) => {
      return res.json(await deleteComanda(req.params.id));
    })
  
 export default comandaRouter;