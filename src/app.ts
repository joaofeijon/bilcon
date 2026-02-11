import 'dotenv/config';
import fastify from 'fastify';
import routes from './routes/index';

const app = fastify({ logger: true });

app.register(routes);

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen({ port: PORT, host: HOST }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server listening at ${address}`);
});