import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export default async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get('/', async (request, reply) => {
    return { message: 'Hello World' };
  });
}