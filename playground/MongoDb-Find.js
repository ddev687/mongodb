//const MongoClient=require('mongodb').MongoClient;
const {MongoClient}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/student',(err,db)=>{
	if(err){
		return console.log("Error: "+err);
	}
	console.log("Success");
	db.collection('stud').find({status:false}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log(err);
	})
	db.collection('stud').find().count().then((c)=>{
		console.log('Total Recored = '+c);
	});
	},(err)=>{
		console.log(err);
	});
	//db.close(
});