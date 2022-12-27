import { Router } from 'express';
import { applicationRouter } from './applicationRouter';
const routes = Router()

routes.use('/', applicationRouter);

export default routes
