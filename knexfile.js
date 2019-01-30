// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/jsflash'
    },

  production: {
    client: 'postgresql',
    connection: {
      database: process.ENV.DATABASE.URL
    }
  }
}

