import express from 'express';
import cors from "cors";
import dotenv from "dotenv";

import { parkingSpaceRouter } from './routers/parkingSpaceRouter.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use('/api/v1/parking-space', parkingSpaceRouter);

app.get('/', async (req, res) => {
    res.send('\'/main\' api is up');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

