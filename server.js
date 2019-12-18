const app = require('./config/custom-express')();
const http = require('http');

const port = process.env.PORT || 8081;
const server = http.createServer(app);
server.listen(port, () => console.log(`Servidor rodando na PORTA:${port}`));
