const express=require('express');
const bodyParser=require('body-parser')
const {ObjectId}=require('mongodb');

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
	});
});

app.get('/studs/:id',(req,res)=>{
	var id=req.params.id;
	if(!ObjectId.isValid(id)){
		return res.status(404).send();
		//return console.log("Invalid Id");
	}
	stud.findById(id).then((stud)=>{
		if(!stud){
			return res.status(404).send();
		}
		res.send({stud});
	}).catch((e)=>{
		res.status(400).send();
	})

});
app.listen(3000);

module.exports={app};