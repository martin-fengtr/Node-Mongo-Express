import { json } from 'body-parser';
import { default as compression } from 'compression';
import { userController } from 'controllers/UserController';
import { default as cors } from 'cors';
import { default as express, NextFunction, Request, Response } from 'express';
import { default as helmet } from 'helmet';
import eventRoute from 'routes/EventRoutes';
import userRoute from 'routes/UserRoutes';

export const server = express();

server
  .use(helmet())
  .use(cors({ origin: '*' }))
  .use(compression())
  .use(json())
  .use('/users', userRoute)
  .use('/events', eventRoute)
  .get('/', (req: Request, res: Response, next: NextFunction) => {
    return res.json({ success: true, message: 'Server works!' });
  })
  .post('/login', userController.login);
