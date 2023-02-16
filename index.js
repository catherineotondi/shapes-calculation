"use strict";
exports.__esModule = true;
exports.areaAndPeriOfSquare = exports.areaAndPeriOfRectangle = exports.areaAndPeriOfCircle = void 0;
function areaAndPeriOfCircle(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    var perimeter = 2 * Math.PI * radius;
    return { area: area, perimeter: perimeter };
}
exports.areaAndPeriOfCircle = areaAndPeriOfCircle;
// Calculate the Area and Perimeter of a Rectangle
function areaAndPeriOfRectangle(length, width) {
    var area = length * width;
    var perimeter = 2 * (length + width);
    return { area: area, perimeter: perimeter };
}
exports.areaAndPeriOfRectangle = areaAndPeriOfRectangle;
// Calculate the Area and Perimeter of a Square
function areaAndPeriOfSquare(side) {
    var area = Math.pow(side, 2);
    var perimeter = 4 * side;
    return { area: area, perimeter: perimeter };
}
exports.areaAndPeriOfSquare = areaAndPeriOfSquare;
