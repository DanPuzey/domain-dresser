const http = require('http');

const handler = (req, res) => {
  const { url, headers } = req;
  const { host } = headers;
  const Location = `https://www.${host}${url}`;

  res.writeHead(302, { Location });
  res.end();
};
const server = http.createServer(handler);

server.listen(80);
console.log('server listening');
