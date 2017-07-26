// how to define an object

var x = "humidity";

var weather = {
	currentTemp: 82,
	isRaining: false,
	humidity: "too much",
	"is-sunny": true
};

console.log(weather);


// Assigining a property to an object

weather.location = "Nashville";
weather["zipcode"] = 37212;


console.log(weather.isRanning);
console.log(weather["is-sunny"]);

console.log("humidity", weather[x]);
