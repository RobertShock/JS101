console.log ("I'm in second.js");

var perry = "penguin";
var nellie = "owl";

console.log("Perry is a " + ".");

var quote = "when you don’t create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create. things";

var numberOfCharacters = quote.lenght; 
console.log("length of quote", numberOfCharacters);

// Built in Methods
// .indexOf()
// charAt()
// .replace()

console.log(quote.indexOf("things"));
// points to the first character of the "defined" word.  Will give the index of the beginning of the string (first encounter)

console.log(quote.charAt(0));
// will give the character at the specified index.

console.log(quote.replace("things", "robots"));
// replaces "things" only the first time in the quote.
var quote = quote.replace(/things/g, "robots");
// replaces all "things" within the quote.
document.getElementById("quote").innerHTML = quote;


var element = document.getElementById("secondQuote");
// reading from HTML
var jsString = element.innerHTML;
console.log(jsString);

