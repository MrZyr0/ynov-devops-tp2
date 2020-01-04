'use-strict'

// Create instances
const Express = require('express');
const WebServer = Express();
const PORT = process.env.API_PORT || 3030;
const { Client } = require('pg')
const redis = require("redis")


// Setup instances
const pgClient = new Client({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

WebServer.listen(PORT, (error) => {
    if(error) {
        throw error;
    }

    pgClient.connect()

    console.log('## API STARTED !')
    console.log(`## Express server listening on local container port ${PORT}`);
});

const redisClient = redis.createClient({ host: process.env.REDIS_HOST });

//
WebServer.get('/', function (req, res)
{
    res.json({ message: "Hello World" });
});


WebServer.get('/status', async (req, res) => {
    const postgresQuery = 'SELECT date_trunc(\'second\', current_timestamp - pg_postmaster_start_time()) as uptime;'
    const result = await pgClient.query(postgresQuery)
    const uptime = result.rows[0].uptime
    const uptimeString = () => {
        let time = ''

        time += uptime.hours ? `${uptime.hours}h ` : ''
        time += uptime.minutes ? `${uptime.minutes}m ` : ''
        time += uptime.seconds ? `${uptime.seconds}s` : ''

        return time
    }

    res.json({
        status: 'ok',
        postgresUptime: uptimeString(),
        redisConnectedClients: Number(redisClient.server_info.connected_clients)
    })
})