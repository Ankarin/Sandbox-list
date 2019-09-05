const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    id:Number,
    sortKey:Number,
    message: String,
    nested: Object
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);