const { parse } = require("pg-connection-string")

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"))

  return {
    client: "postgres",
    connection: {
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  }
}
