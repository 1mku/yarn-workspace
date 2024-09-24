import fastify from "fastify";
import cors from "@fastify/cors";
import("pino-pretty");

const server = fastify({
	logger: {
		transport: {
			target: "pino-pretty",
		},
	},
});
await server.register(cors);

server.get("/", async (request, reply) => {
	return reply.send({ data: "pong" });
});

server.listen({ port: 8080 }, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at ${address}`);
});
