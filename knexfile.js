// Update with your config settings.

module.exports = {

  test: {
    client: 'mysql2',
    debug: false
  },

  development: {
    client: 'mysql2',
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    }
  }

};
