import dotenv from 'dotenv';

import router from './routes/index.js';
import mongoConnect from './database/database.js';
import express from 'express';

dotenv.config();
mongoConnect();
const app = express();
app.use(express.json());

router(app);

export default app;
