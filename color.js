// "The color at " _index number "is " _color name_
// chartreuse, navy, forest green, aqua, purple, frost, emerald, international-rescue orange, seafoam green, firehouse red


// create a variable with the string list of colors 

var colorList = "chartreuse, navy, forest green, aqua, purple, frost, emerald, international-rescue orange, seafoam green, firehouse red";

// make the list into an array

var array = colorList.split(", ");
// console.log(array);

// sort that array alphabetically
array.sort();

console.log(array);
// loop thruough the array and log to the console the statements:
// "The color at " _index number "is " _color name_

for (var i = 0; i < array.length; i++){
	console.log("The color at " + i + " is " + array[i]);
}

