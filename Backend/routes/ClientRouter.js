import express from 'express'
import { createClient,
    getClient,
    deleteClient,
    getClientById, getClientByEmailAndPasswords} from "../dataAccess/ClientDA.js"

let clientRoute= express.Router();
clientRoute.route('/client/login').post(async (req, res) => {
    try {
        const clients = await getClientByEmailAndPasswords();
        return res.json(clients);
    } catch (error) {
        console.error('Eroare la aducerea clienților:', error);
        return res.status(500).json({ error: 'Eroare la aducerea clienților. Vă rugăm să încercați din nou mai târziu.' });
    }
});


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
