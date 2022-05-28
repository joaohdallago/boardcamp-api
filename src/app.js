import express from 'express';
import cors from 'cors';

import routers from './routers/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);

app.listen(4000);
