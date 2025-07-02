import http from "http";
const server = http.createServer((req, res) => {
  res.end("Good Morning");
});
const server1 = http.createServer((req, res) => {
  res.end("Good Evening");
});

server.listen(8081, () => {
  console.log("Server Started");
});
server1.listen(8082, () => {
  console.log("Server Started");
});
