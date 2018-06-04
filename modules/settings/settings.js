module.exports = {
	dbSettings: {
		host: 'localhost',
		user: 'project',
		password: 'root',
		database: 'project',
		connections: 100
	},

	port: 8000,

	pwdSaltRounds: 10, // Rounds para el salt de bcrypt

	auth: {
		tokenLength: 64,
		tokenDuration: 3600 // En s
	},

	api: {
		max_results: 20 // Máximo de resultados por llamada (genérico)
	}
}