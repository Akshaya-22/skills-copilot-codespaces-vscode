// create web server
// 1. create server
// 2. create request listener
// 3. create request handler
// 4. create response handler
// 5. create response listener
// 6. start server

// 1. create server
const http = require('http');
const server = http.createServer();

// 2. create request listener
server.on('request', (req, res) => {
  // 3. create request handler
  const { url, method } = req;
  if (url === '/comments' && method === 'GET') {
    // 4. create response handler
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({ comments: [] }));
  } else {
    res.statusCode = 404;
    res.write('Not Found');
  }
  // 5. create response listener
  res.end();
});

// 6. start server
server.listen(3000);