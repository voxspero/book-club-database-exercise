var mongoose = require("mongoose");

// SCHEMA SETUP

var bookSchema = new mongoose.Schema({
   title: String,
   author: String,
   year: String,
   publisher: String,
	comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

var Book = mongoose.model("Book", bookSchema);

module.exports = mongoose.model("Book", bookSchema);