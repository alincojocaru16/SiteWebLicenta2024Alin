import express from 'express';
import env from 'dotenv';
import DB_Init from './entities/DB_Init.js';
import createDbRouter from './routes/crateDBRouter.js';
import clientRoute from './routes/ClientRouter.js';
import comandaRouter from './routes/ComandaRouter.js';
import produseRouter from './routes/ProduseRouter.js';
import conturiRouter from './routes/ConturiRouter.js';
import stockRouter from './routes/StockProduseRouter.js';
env.config();

let app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
DB_Init();

app.use("/api",createDbRouter);
app.use("/api",clientRoute);
app.use("/api",comandaRouter);
app.use("/api",produseRouter);
app.use("/api",conturiRouter);
app.use("/api",stockRouter);



let port = process.env.PORT || 8001;
app.listen(port);
console.log('API is runnning at ' + port); 
