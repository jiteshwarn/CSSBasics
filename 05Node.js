//file system

// asynchronus reading>>better way of writting
const fs = require("fs");
fs.readFile("./test.txt","utf-8",function(err,data){
if(!err){
console.log("reading file...");
console.log(data);
console.log("completed reading...")
}else{
    console.log("error occrred"+err);
}
});