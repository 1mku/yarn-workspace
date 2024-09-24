import fastify from 'fastify';

import('pino-pretty');
const server = fastify({
  logger: { transport: {
    target: "pino-pretty"
  } }
});
server.get("/ping", async (request, reply) => {
  return "pong\n";
});
server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
