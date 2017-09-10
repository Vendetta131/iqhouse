var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/house',function(err,db){
  if(err) throw err;
});

module.exports = mongoose;
