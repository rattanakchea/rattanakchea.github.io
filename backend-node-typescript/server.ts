import http from "http";

const PORT = 3000;

http
  .createServer((request, response) => {
    response.end("Hello Node Server in TS on port");
  })
  .listen(PORT, () => {
    console.log("server starts on PORT::", PORT);
  });
