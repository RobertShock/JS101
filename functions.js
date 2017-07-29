console.log("in functions.js");

console.log(cutUpInput)
var outputNumber = cutUpInput(5);
console.log(outputNumber);



function nuggetFactory (animalInput) {
	// chickens are cut up
	cutUpInput(animalInput);
	// chickens are separated into chuncks
	// take the chunks and fry them
	// package the nuggets
}


function cutUpInput (input) {
	var output = input * 20;
	return output;
}

// FUNCTION DECLARATIONS
// 	cannot change the function name later

// var summation;
// var constant = 40;

// function doesAddition (numberOne, numberTwo) {
// 	summation = numberOne + numberTwo + constant;
	// numberOne and numberTwo are paramaters.  adds numbers.
// var sum = numberOne + numberTwo;
// return sum;
// }

// console.log(summation);

// function doesMoreMath(){
// var value = 42;
// }

// console.log(doesAddition(2,3));


// FUNCTION EXPRESSION

var additionAction = function (first, second) {
	return first + second;
}

console.log(additionAction(4, 9));
