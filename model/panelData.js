/**
 * Created by cebbus on 17.03.2016.
 */
var mongoose = require('mongoose');

var panelDataSchema = mongoose.Schema({
    panelId: mongoose.Schema.Types.ObjectId,
    akim: Number,
    gerilim: Number,
    sicaklik: Number,
    nem: Number,
    date: Date
});

mongoose.model('PanelData', panelDataSchema);
