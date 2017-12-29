const express=require('express');
const bodyParser=require('body-parser')

var {mongoose} = require('C:/Users/lcom81_one/Desktop/NodeJs/mongodb/server/db/mongoose');
var {stud} = require('./models/stud');

var app=express();

app.use(bodyParser.json());

app.post('/studs',(req,res)=>{
	var newStud = new stud({
		name:req.body.name,
		age:req.body.age,
		status:req.body.status
	});
	newStud.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.send(e);
	})
});
app.listen(3000);