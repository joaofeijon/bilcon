import { app } from "./app"
import { env } from "./env"

app
	.listen({
		host: env.HOST,
		port: env.PORT,
	})
	.then(() => {
		console.log(`👾 Run server from http://${env.HOST}:${env.PORT}`)
	}).catch((err) => {
		console.error("Error starting server:", err)
	})