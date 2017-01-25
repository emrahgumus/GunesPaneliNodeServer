/**
 * Created by cebbus on 16.03.2016.
 */
var mongoose = require('mongoose');

var panelSchema = mongoose.Schema({
    name: String,
    location: String,
    macAddr: String,
    ipAddr: String,
    status: Boolean
});

mongoose.model('Panel', panelSchema);
