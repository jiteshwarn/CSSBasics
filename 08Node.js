const express= require("express");
var app= express();

app.use("/",(req,res,next)=>{
res.set("X-Powered-By","jitesh");
next();
});

app.get("/",(req,res)=>{
res.send("<h1>Home Page</h1>");
});
app.get("/admin",(req,res)=>{
res.send("<h1>Admin Page</h1>");
});
app.get("/:name",(req,res)=>{
var param=req.params['name'];
res.send("<h1>"+param+"</h1>");
});
app.listen(3000,()=>{
    console.log("listing on port 3000 at localhost");
})