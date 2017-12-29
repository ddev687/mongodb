const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost27017/student');

var StudTest=mongoose.model('StudTest',{
	name:{
		type:String
	},
	age:{
		type:Number
	},
	status:{
		type:Boolean
	}
});
var newStud=new StudTest({
	name:'Hardik',
	age:23,
	status:false
});
newStud.save().then((doc)=>{
	console.log(doc);
},(e)=>{
	console.log(e);
});