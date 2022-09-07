// eslint-disable-next-line import/no-extraneous-dependencies
import Fastify from 'fastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from '@fastify/cors';

const PORT = Number(process.env.PORT) || 3000;

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  origin: '*',
});

fastify.get('/parrots', async () => {
  return { count: 12345 };
});

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
