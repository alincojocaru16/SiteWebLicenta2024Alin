import express from 'express';
import env from 'dotenv';
import DB_Init from './entities/DB_Init.js';
import createDbRouter from './routes/crateDBRouter.js';


env.config();

let app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
DB_Init();

app.use("/api",createDbRouter);

let port = process.env.PORT || 8001;
app.listen(port);
console.log('API is runnning at ' + port); 