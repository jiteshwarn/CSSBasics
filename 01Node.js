// inbuild module
var os = require('os');
var path=require('path');
console.log(os.platform());
//__dirname :gives current directive
console.log(path.join(__dirname,"views"))