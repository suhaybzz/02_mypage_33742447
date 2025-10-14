var http = require("http");
const port = 8000;

http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Page</title>
    </head>
    <body>
      <h1>Hello, I'm Suhayb Ahmed! and I study at Goldsmiths.</h1>
      <h2>Student ID: 33742447</h2>
      <p>I am learning how to build web apps with Node.js...</p>
    </body> 
    </html>
  `);
}).listen(port, function() {
  console.log(`Server running on port ${port}...`);
});
