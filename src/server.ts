import cors from 'cors'
import express from 'express'
import { IncomingMessage, Server, ServerResponse } from 'http'
import morgan from 'morgan'
import routes from './routes'

const app = express();
const server = new Server(app);

class App {
  app: Express.Application
  server: Server<typeof IncomingMessage, typeof ServerResponse>

  constructor() {
    this.app = app;
    this.server = server;
    this.middleware();
    this.routes();
  }

  middleware() {
    app.use(cors());
    app.use(morgan('dev'));
    app.use(express.json());
  }

  routes() {
    app.use(routes);
  }
}


export default new App().server
