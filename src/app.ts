import fastify from "fastify"
import { ZodError } from "zod"
import { env } from "./env"
import fastifyJwt from "@fastify/jwt"
import fastifyCookie from "@fastify/cookie"
import fastifyCors from "@fastify/cors"

export const app = fastify()

app.register(fastifyCors, {
	origin: true, 
	methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
	credentials: true,
})

app.register(fastifyJwt, {
	secret: env.JWT_SECRET,
	cookie: {
		cookieName: 'refreshToken',
		signed: false
	},
	sign: {
		expiresIn: "10m",
	},
})

app.get("/", (req, res) => {
  res.send("Hello")
})

app.setErrorHandler((error, _, reply) => {
	if (error instanceof ZodError) {
		return reply
			.status(400)
			.send({ message: "Validadtion error", issues: error.format() })
	}
	if (env.NODE_ENV !== "production") {
		console.error(error)
	} else {
		// TO DO: Here we should log to an external tool like DataDog/NewRelic/Sentry
	}
	return reply.status(500).send({ message: "Internal server error" })
})