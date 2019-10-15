// Declarations & Requirements

var express 				= require("express"),
	app						= express(),
	// expressSanitizer		= require("express-sanitizer"),
	bodyParser 				= require("body-parser"),
	mongoose 				= require("mongoose"),
	passport 				= require("passport"),
	LocalStrategy 			= require("passport-local"),
	User					= require("./models/user"),
	Book					= require("./models/book"),
	Comment					= require("./models/comment"),
	// passportLocalMongoose 	= require("passport-local-mongoose"),
	seedDB 					= require("./seeds");
	// request					= require("request");

mongoose.connect("mongodb://localhost/book_data", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// app.use(expressSanitizer());
seedDB();

// passport cfg

app.use(require("express-session")({
    secret: "hi lol",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res){
    res.render("books/search");
});

// BOOK LIST - INDEX (ARCHIVE)
// NEED TO RECONFIGURE THIS

// res.render("books/index", { books: allBooks, currentUser: req.user });

app.get("/books", function(req, res) {
	// get all books from db
	Book.find({}, function(err, allBooks){
		if(err){
			console.log(err);
		} else {
			res.render("books/index", { books: allBooks, currentUser: req.user });
		}
	});
});

// BOOK LIST - CREATE (SUBMIT)

app.post("/books", function(req, res){
	var title 		= req.body.title,
		author 		= req.body.author,
		year 		= req.body.year,
		publisher 	= req.body.publisher,
		newBook 	= {
			title: title,
			author: author, 
			year: year, 
			publisher: publisher
		};

	// Create new book, save to db
	Book.create(newBook, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
			res.redirect("/books");
		}
	});
});

app.get("/books/submit", function(req, res){
	res.render("books/submit");
});

// BOOK LIST - SHOW

app.get("/books/:id", function(req, res) {
	Book.findById(req.params.id).populate("comments").exec(function(err, foundBook){
		if(err){
			console.log(err);
		} else {
			res.render("books/show", {book: foundBook});
		}
	});
});

// COMMENTS

app.get("/books/:id/comments/submit", isLoggedIn, function(req, res){
	Book.findById(req.params.id, function(err, book){
		if(err){
			console.log(err);
		} else {
			res.render("comments/submit", {book: book});
		}
	});
});

// add back isLoggedIn ^ & v

app.post("/books/:id/comments", isLoggedIn, function(req, res){
	//req.body.comment.text = req.sanitize(req.body.comment.text);

	Book.findById(req.params.id, function(err, book){
		if(err){
			console.log(err);
			res.redirect("/books");
		} else {
			Comment.create(req.body.comment, function(err, comment){
				if(err){
					console.log(err);
				} else {
					book.comments.push(comment);
					book.save();
					res.redirect("/books/" + book._id);
				}
			});
		}
	});
});

app.get("/format", function(req, res){
    res.render("format");
});

// AUTH ROUTES

app.get("/register", function(req, res){
	res.render("register");
});

app.post("/register", function(req, res){
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.render("register");
		}
		passport.authenticate("local")(req, res, function(){
			res.redirect("/books");
		});
	});
});

app.get("/login", function(req, res){
	res.render("login");
});

// app.post("/login", middleware, callback);

app.post("/login", passport.authenticate("local", 
	{
		successRedirect: "/books",
		failureRedirect: "/login" 
	}), function(res, req){
});

app.get("/logout", function(req, res){
	req.logout();
	res.redirect("/books");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(3000, function() {
	console.log("Listen server started on port 3000.");
});