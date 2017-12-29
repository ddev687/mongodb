//var {mongoose} = require('./db/mongoose');
var {mongoose} = require('C:/Users/lcom81_one/Desktop/NodeJs/mongodb/server/db/mongoose');
var stud = mongoose.model('stud', {
  name: {
    type: String,
    trim:true
  },
  age: {
    type: Number,
  },
  status: {
    type: Boolean,
    default:false
  }
});

module.exports={stud}