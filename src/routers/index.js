import { Router } from 'express';

import categoriesRouter from './categoriesRouter.js';

const routers = Router();

routers.use(categoriesRouter);

export default routers;
