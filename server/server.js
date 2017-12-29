var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/StudentTest');

var StudTest = mongoose.model('stud', {
  name: {
    type: String,
    require:true,
    minlength:1,
    trim:true
  },
  age: {
    type: Number,
    require:true
  },
  status: {
    type: Boolean,
    default:false
  }
});

var newStud=new StudTest({
	name:'Arjun',
	age:23,
	status:false
});

newStud.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save', e);
});