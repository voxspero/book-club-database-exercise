// var nav = $("#mainNavbar");
// var navBurg = $("#navBurger");
// var navCollapse = $(".collapse");

// // toggles class "scrolled" on #mainNavbar when scroll reaches the height of the #mainNavbar
// // from the document origin.

// $("button").on("click", function() {
//     var nav = $("#mainNavbar");
//     var navBurg = $("#navBurger");
//     var navCollapse = $(".collapse");

//     if (!(navBurg.hasClass("collapsed"))) {
//         nav.toggleClass("scrolled");
//     }
// });

// $(document).scroll(function() {
//     var nav = $("#mainNavbar");
//     var navLinks = $("#navLinks");

//     if (($(this).scrollTop() > nav.height())) {
//         nav.toggleClass("scrolled");    
//     } 
// });

// authors = [
//     "Charles Rayburn",
//     "Veronica Bartley",
//     "Diana Fitzgerald",
//     "Warren Sneakers"
// ];

// titles = [
//     "Fires Northward",
//     "The Jailor's Curse",
//     "We Haven't Given Up",
//     "Sorry, We've Moved!"
// ];

// publishers = [
//     "E.G. Baker Publishing House",
//     "Penguin",
//     "New Ward Books",
//     "Solstice Press"
// ];

// years = [
//     "1922",
//     "1985",
//     "2001",
//     "2013"
// ];

var books = [
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

// var table = $(".book-table");

// for (var i = 0; i < table.rows.length; i++) {
//     for (var j = 0; j < table.rows[i].cells.length; j++) {
//         table.rows[i].cells[j].innerHTML = books[i][j];
//     }
// }

// function generateTable(table, data) {
//     for (let element of data) {
//         let row = table.insertRow();
//         row.className = "book-table-row";
//         for (key in element) {
//         let cell = row.insertCell();
//         cell.className = "book-table-col";
//         let text = document.createTextNode(element[key]);
//         cell.appendChild(text);
//         }
//     }
// }

// let table = document.querySelector(".book-table");

// if ((document.location.href === 'http://127.0.0.1:5500/BOOKDATABASE-V2/show.ejs') || (document.location.href === 'https://s3.amazonaws.com/dasgeo.de/bookdir/archive.html')) {
//     generateTable(table, books);
// }

var inputAuthor;
var inputTitle;
var inputPublisher;
var inputYear;

var newBook = {
    author: "", 
    title: "", 
    publisher: "", 
    year: ""
};

$("input:text").on("change", function() {
    inputAuthor = document.getElementById("#author").value;
    inputTitle = document.getElementById("#title").value;
    inputPublisher = document.getElementById("#publisher").value;
    inputYear = document.getElementById("#year").value;

    console.log("boop");
    console.log(inputAuthor);
    console.log(inputTitle);
    console.log(inputPublisher);
    console.log(inputYear);

    newBook = {
        author: inputAuthor, 
        title: inputTitle,
        publisher: inputPublisher, 
        year: inputAuthor
    };

    // storeBook(newBook);
});

// $("#submitButton").on("click", function() {
//     books.push(newBook);
// });

// function storeBook(book) {
//     books.push(book);
// }
