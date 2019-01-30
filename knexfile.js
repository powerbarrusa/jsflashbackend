// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/jsflash'
    },

  production: {
    client: 'pg',
    connection: {
      database: 'postgres://qrgjmabjbsyuvf:e82d83cdf99f5d8c0298c1215804acc87e9c23b4af1b95dea337b308340caba0@ec2-23-23-184-76.compute-1.amazonaws.com:5432/de1aj23q79dlov'
    }
  }
}

