var liters = function (gallons) {
  return gallons / 0.26417;
}

// var gallons = parseInt(prompt("Enter the number of gallons:"));
//
// alert(liters(gallons));

var kilograms = function (pounds) {
  return pounds / 2.2046;
}

// var pounds = parseInt(prompt("Enter the number of pounds:"));
//
// alert(kilograms(pounds));


var grams = function (ounces) {
  return ounces / 0.035274;
}

// var ounces = parseInt(prompt("Enter the number of ounces:"));
//
// alert(grams(ounces));

var userInput = parseInt(prompt("Enter number:"));
alert(liters(userInput));
