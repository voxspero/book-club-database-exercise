var mongoose = require("mongoose");

// SCHEMA SETUP

var commentSchema = new mongoose.Schema({
	text: String,
	author: String,
	created:	{
		type: Date, 
		default: Date.now
	}
});

var Comment = mongoose.model("Comment", commentSchema);

module.exports = mongoose.model("Comment", commentSchema);