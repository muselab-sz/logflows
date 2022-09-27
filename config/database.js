module.exports = ({env}) => ({
    connection: {
        client: 'mysql',
        connection: {
            host: env('DATABASE_HOST', '192.168.3.13'),
            port: env.int('DATABASE_PORT', 3306),
            database: env('DATABASE_NAME', 'logflows'),
            user: env('DATABASE_USERNAME', 'logflows'),
            password: env('DATABASE_PASSWORD', '123456'),
            ssl: env.bool('DATABASE_SSL', false),
        },
    },
});

