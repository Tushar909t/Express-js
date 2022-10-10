const express = require('express');

app=express();

app.get("/", function(req,res){
    res.send("Hello Express Js");
});

app.listen(5500, function(){
    console.log("server Run Success");
})