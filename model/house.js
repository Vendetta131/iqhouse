var mongoose = require('../db');
var Schema = mongoose.Schema;

var houseSchema = new Schema({
  name       : String,
  adress     : String,
  mainimg    : { type: String, default: './static/img/2.jpg' },
  flats      : [{ type: Schema.Types.ObjectId, ref: 'Flat' }]
});

var flatSchema = new Schema({
	name       : String,
  _house     : { type: Schema.Types.ObjectId, ref: 'House' },
  devices    : [{ type: Schema.Types.String, ref: 'Device' }]
});

exports.House  = mongoose.model('House', houseSchema);
exports.Flat = mongoose.model('Flat', flatSchema);