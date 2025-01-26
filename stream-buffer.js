const http = require('http');

//* create a server with row node.js
const server = http.createServer();

//* listen to the request event
server.on('request', (request, res)=>{
    console.log(request);

    res.end('Hello form the server!')
});


server.listen(5000, ()=>{
    console.log(`the server is running on port 5000`);
})