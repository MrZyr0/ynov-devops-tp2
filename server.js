'use-strict'

const Express = require('express');
const WebServer = Express();
const PORT = process.env.API_PORT || 3030;


WebServer.listen(PORT, (error) => {
    if(error) {
        throw error;
    }

    console.log('## API STARTED !')
    console.log(`## Express server listening on port ${PORT}`);
});

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