'use-strict'

const Express = require('express');
const WebServer = Express();
const PORT = process.env.API_PORT || 3000;

WebServer.listen(PORT);

WebServer.get('/', function (req, res)
{
    res.json({ message: "Hello World" });
});


WebServer.get('/status', function (req, res)
{
    res.json({
        "status": "OK",
        "postgresUptime": String,
        "redisConnectedClients": Number
        });
});


WebServer.get('/api', function (req, res)
{
    res.json({ message: "Hello NGINX !" });
});