// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'bazargmc',
      user:     'postgres',
      password: 'alvim1234'
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    }
  },

};
