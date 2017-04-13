const fs = require("fs");
var readStream=fs.createReadStream("./hugedata.txt",{encoding:'utf-8'});
readStream.on("data",function(content){
console.log("printing...");
console.log(content);
});
readStream.on('end',function(content){
console.log("completed reading..")
});