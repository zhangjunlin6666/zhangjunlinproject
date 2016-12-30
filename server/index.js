var express=require('express');
var app=express();

app.use(express.static('public'));

app.all("*",function(req,res,next){
	 res.header("Access-Control-Allow-Origin", "*");
	next()
})
app.get("/d1",function(req,res){
	res.sendFile(__dirname+"/1.json");
})
app.get("/d2",function(req,res){
	res.sendFile(__dirname+"/2.json");
})
app.get("/d3",function(req,res){
	res.sendFile(__dirname+"/3.json");
})
app.get("/news",function(req,res){
	res.sendFile(__dirname+"/5.json");
})
app.get("/details",function(req,res){
	res.sendFile(__dirname,"/")
})
app.listen(4000,function(){
	console.log("服务器已启动");
})