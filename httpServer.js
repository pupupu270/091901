

let http = require("http");
let fs = require("fs");

let server = http.createServer((req,res)=>{
res.writeHead(200,{"Content-Type":"text/html;charset = utf-8"});
res.write("<html><head></head><body>test</body></html>");
res.end();
}).listen();
