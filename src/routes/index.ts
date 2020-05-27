import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../config/swagger';
import palidromeRouter from './palindrome.routes';
import homeRouter from './home';

const routes = Router();

routes.use('/', homeRouter);
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
routes.use('/api', palidromeRouter);

export default routes;
