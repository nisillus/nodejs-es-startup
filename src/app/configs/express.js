import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import routes from '@app/routes';
import { homeController } from '@app/controllers/home.controller';

import envVars from './env-variables';

const app = express();

app.set('env', envVars.env);
app.set('port', envVars.port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', routes);

app.get('/', homeController);

function connectToServer() {
  app.listen(app.get('port'), () => {
    console.log(('App is running at http://localhost:%d in %s mode'),
      app.get('port'), app.get('env'));
    console.log('Press CTRL-C to stop\n');
  });
}

export {
  app,
  connectToServer
};

