let mongoose = require('../db');
let Schema = mongoose.Schema;

let daySchema = new Schema({
  day        : String,
  _values     : [{ type: Schema.Types.ObjectId, ref: 'Value' }],
});

let valueSchema = new Schema({
  _day       : { type: Schema.Types.String, ref: 'Day' },
  _device    : { type: Schema.Types.String, ref: 'Device' },
  val        : Number
});


exports.Day  = mongoose.model('Day', daySchema);
exports.Value  = mongoose.model('Value', valueSchema);
