var mongoose = require("mongoose");
var Book = require("./models/book");
var Comment   = require("./models/comment");

var data = [
	{
        author: "Charles Rayburn", 
        title: "Fires Northward", 
        publisher: "E.G. Baker Publishing House", 
        year: "1922"
    },
    {
        author: "Veronica Bartley", 
        title: "The Jailor's Curse", 
        publisher: "Penguin", 
        year: "1985"
    },
    {
        author: "Diana Fitzgerald", 
        title: "We Haven't Given Up", 
        publisher: "New Ward Books", 
        year: "2001"
    },
    {
        author: "Warren Sneakers", 
        title: "Sorry, We've Moved!", 
        publisher: "Solstice Press", 
        year: "2013"
	},
	{
        author: "Robin Stevenson", 
        title: "Up All Night: A Guide To Self-Starting", 
        publisher: "Haverford Publishers", 
        year: "2016"
    },
    {
        author: "Robert Geraldine", 
        title: "Woodstock: A Hippie's Memoir", 
        publisher: "Fifteen Books", 
        year: "1996"
    },
    {
        author: "Barry Suder", 
        title: "The Dragon's Keep", 
        publisher: "Wreath Books", 
        year: "1999"
    },
    {
        author: "Kerrie Williamson", 
        title: "Butterfly: How To Meet People In A New City", 
        publisher: "DK Publishing", 
        year: "2013"
    },
    {
        author: "Donald Miller", 
        title: "A Brief History Of Bread", 
        publisher: "Yellow Back", 
        year: "2014"
    },
    {
        author: "James Singletary", 
        title: "The Secret Empire", 
        publisher: "Broderbund", 
        year: "1983"
    },
    {
        author: "Georgia Kane", 
        title: "Midnight Express", 
        publisher: "Sigil Press", 
        year: "2006"
    },
    {
        author: "Sandy Harold", 
        title: "Don't Touch My Stuff!", 
        publisher: "Random House", 
        year: "1967"
    },
    {
        author: "Carol First", 
        title: "Dayspanner", 
        publisher: "Haverty Publishing", 
        year: "1994"
    },
    {
        author: "John Linden", 
        title: "Wayfinder: Fixed Horizon", 
        publisher: "ABC Books", 
        year: "1987"
    }
];
     
function seedDB(){
   //Remove all books
   Book.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("removed books!");
		Comment.remove({}, function(err) {
			if(err){
				console.log(err);
			}
			console.log("removed books!");
			 //add a few campgrounds
			data.forEach(function(seed){
				Book.create(seed, function(err, book){
					if(err){
						console.log(err)
					} else {
						console.log("added a book");
						//create a comment
						Comment.create(
							{
								text: "This book is okay, but it is no 'The Odyssey'",
								author: "Homer"
							}, function(err, comment){
								if(err){
									console.log(err);
								} else {
									book.comments.push(comment);
									book.save();
									console.log("created new comment");
								}
							});
					}
				});
			});
		});
	}); 
	//add a few comments
}

module.exports = seedDB;