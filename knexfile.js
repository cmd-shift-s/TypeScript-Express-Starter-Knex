// Update with your config settings.

module.exports = {

  test: {
    client: 'mysql2',
    debug: false
  },

  development: {
    client: 'mysql2',
    connection: {
      database: 'blog',
      user: 'blog',
      password: 'blog@123'
    }
  }

};
