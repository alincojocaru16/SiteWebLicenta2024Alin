import express from 'express'
import { createClient,
    getClient,
    deleteClient,
    getClientById} from "../dataAccess/ClientDA.js"

let clientRoute= express.Router();

clientRoute.route('/client').post(async(req,res) => {
    return res.json(await createClient(req.body));
})

clientRoute.route('/client').get(async(req,res) => {
    return res.json(await getClient());
})

clientRoute.route('/client/:id').get( async (req, res) => {
    return res.json(await getClientById(req.params.id));
  })

  clientRoute.route('/client/:id').delete( async (req, res) => {
    return res.json(await deleteClient(req.params.id));
  })

  export default clientRoute;
