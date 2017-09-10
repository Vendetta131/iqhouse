var mongoose = require('../db');
var Schema = mongoose.Schema;

var deviceSchema = new Schema({
  _id        : String,
  name       : String,
  type       : String,
  state      : {type: Boolean, default: false},
  _flat      : { type: Schema.Types.ObjectId, ref: 'Flat' },
  _values    : [{ type: Schema.Types.ObjectId, ref: 'Value' }],
});


exports.Device  = mongoose.model('Device', deviceSchema);
