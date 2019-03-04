import * as Koa from 'koa';

import { routes } from './routes';
import { config } from './config';
import { logger } from './logger';

const app = new Koa();

app.use(logger);
app.use(routes);

app.listen(config.port);
console.log(`Listening on ${config.port}`);