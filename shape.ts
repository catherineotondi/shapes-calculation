import { areaAndPeriOfCircle, areaAndPeriOfSquare, areaAndPeriOfRectangle } from './index';



let circleArea = areaAndPeriOfCircle(3).area
let circlePerimeter = areaAndPeriOfCircle(3).perimeter

console.log(circleArea)
console.log(circlePerimeter)

let squareArea = areaAndPeriOfSquare(3).area
let squarePerimeter = areaAndPeriOfSquare(3).perimeter

console.log(squareArea)
console.log(squarePerimeter)

let rectangleArea = areaAndPeriOfRectangle(3,4).area
let rectanglePerimeter = areaAndPeriOfRectangle(3,4).perimeter

console.log(rectangleArea)
console.log(rectanglePerimeter)