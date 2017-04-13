const http = require("http");
var server = http.createServer((request, response) => {
    response.end("<h1>Welcome to Web</h1>");
});
// can give any  port nuumber
server.listen(3000, () => {
    console.log("listening on port 3000 local host");
});