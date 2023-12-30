

module.exports = {
    client: 'pg',
    connection: {
        database: 'survey-system',
        user: 'postgres',
        password: 'bulb123',
        host: 'localhost',
        port: '5432',
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: './migrations',
    },
};