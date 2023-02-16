"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var circleArea = (0, index_1.areaAndPeriOfCircle)(3).area;
var circlePerimeter = (0, index_1.areaAndPeriOfCircle)(3).perimeter;
console.log(circleArea);
console.log(circlePerimeter);
var squareArea = (0, index_1.areaAndPeriOfSquare)(3).area;
var squarePerimeter = (0, index_1.areaAndPeriOfSquare)(3).perimeter;
console.log(squareArea);
console.log(squarePerimeter);
var rectangleArea = (0, index_1.areaAndPeriOfRectangle)(3, 4).area;
var rectanglePerimeter = (0, index_1.areaAndPeriOfRectangle)(3, 4).perimeter;
console.log(rectangleArea);

console.log(rectanglePerimeter);
