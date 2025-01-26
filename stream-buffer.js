const http = require("http");
const fs = require("fs");

//* create a server with row node.js
const server = http.createServer();

//* listen to the request event
server.on("request", (request, res) => {
  if (request.url === "/read-file" && request.method === "GET") {
    // * streaming text reading.
    const readableStream = fs.createReadStream(
      process.cwd() + "/texts/read.txt"
    );

    readableStream.on("data", (buffer) => {
      res.statusCode = 200;
      res.write(buffer);
    });

    readableStream.on("end", () => {
      res.statusCode = 200;
      res.end("  the streaming is over");
    });

    readableStream.on("error", (err) => {
      res.statusCode = 500;
      res.end("something went wrong!");
    });
  }
});

server.listen(5000, () => {
  console.log(`the server is running on port 5000`);
});
