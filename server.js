const express = require("express");
const app = express();

app.get("/",function(request,response){
    response.send("<h1>Hello world</h1>");
})

app.get("/contact",function(req,res){
    res.send("<h1>i m aon insta, fb, logos</h1>")
})

app.get("/about",function(req,res){
    res.send(" <h1>i am a good boy</h1>");
})

app.get("/cook",function(req,res){
    res.send("<h1>i love to cook</h1>");
})

app.listen(3000,function(){
    console.log("server started on port 3000");
});
