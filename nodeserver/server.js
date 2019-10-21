const http = require('http')
const app = require('./app')

// const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(process.env.PORT || 4000);
console.log("Server running at http://localhost:4000")