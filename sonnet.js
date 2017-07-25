// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable.
// Find and output the starting position of the word "orphans".
// Output the number of characters in the sonnet.
// Replace the first occurance of the string "winter" with "yuletide".
// Replace all occurances of the string "the" with "a large".
// Set the content of the sonnet div with the new string.

// var sonnetString = document.getElementById("sonnet").innerHTML

// console.log("index of 'orphans'", sonnetString.indexOf("orphans"));
// console.log("length of sonnet", sonnetString.length);

// sonnetString = sonnetString.replace("winter", "yueltide");
// sonnetString = sonnetString.replace(/the/g, " a large ");

// document.getElementById("sonnet").innerHTML = sonnetString;




var sonnetString = document.getElementById("sonnet").innerHTML;
console.log(sonnetString);
console.log(sonnetString.indexOf("orphans"));
sonnetString = sonnetString.replace("winter", "yueltide");
sonnetString = sonnetString.replace(/the/g, " a large ");
document.getElementById("sonnet").innerHTML = sonnetString;




