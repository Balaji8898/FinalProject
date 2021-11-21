var express=require("express");
var app=express();

const cors = require('cors')

const{MongoClient,ObjectId}=require("mongodb");
var url="mongodb://127.0.0.1:27017";

app.options("*", cors())

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/allqoute",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db("MoveOn")
        db.collection("getqoute").find().sort({_id:-1}).toArray((err,data)=>{
            console.log(data)
            res.send(data)
        })
    })
})


app.get("/lastone",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db("MoveOn")
        db.collection("getqoute").find().sort({_id:-1}).limit(1).toArray((err,data)=>{
            console.log(data)
            res.send(data)
        })
    })
})


app.post("/insertqoute",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db("MoveOn")
        db.collection('getqoute').insertOne(req.body,function(err,data){
            console.log(data)
            res.send(data)
        })
    })
})

app.post("/deleteqoute/:id",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db("MoveOn")
        db.collection('getqoute').findOneAndDelete({_id: ObjectId(req.params.id)},function(err,data){
            res.send(data)
        })
    })
})

app.patch('/updateqoute/:id',(req,res) => {
    MongoClient.connect(url,(err,conn) => {
        var db = conn.db('MoveOn');
        db.collection('getqoute').updateOne({_id : ObjectId(req.params.id)},{$set:req.body},(err,data) => {
            res.send(data)
            })
        })
    })

app.get("/qoute/domestic",function(req,res){
        MongoClient.connect(url,(err,conn)=>{
            var db=conn.db("MoveOn")
            db.collection("getqoute").find().filter({wheredoyouwanttogo:"Domestic"}).sort({_id:-1}).toArray((err,data)=>{
                res.send(data)
            })
        })
    })

app.get("/qoute/international",function(req,res){
        MongoClient.connect(url,(err,conn)=>{
            var db=conn.db("MoveOn")
            db.collection("getqoute").find().filter({wheredoyouwanttogo:"International"}).sort({_id:-1}).toArray((err,data)=>{
                res.send(data)
            })
        })
    })


app.listen(8898,function(){
    console.log("listening on 8898")
})