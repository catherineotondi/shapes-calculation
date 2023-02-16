function areaAndPeriOfCircle(radius: number) {
    let area = Math.PI * Math.pow(radius, 2);
    let perimeter = 2 * Math.PI * radius;
    return { area, perimeter };
}

// Calculate the Area and Perimeter of a Rectangle
function areaAndPeriOfRectangle(length: number, width: number) {
    let area = length * width;
    let perimeter = 2 * (length + width);
    return { area, perimeter };
}

// Calculate the Area and Perimeter of a Square
function areaAndPeriOfSquare(side: number) {
    let area = Math.pow(side, 2);
    let perimeter = 4 * side;
    return { area, perimeter };
}

export { areaAndPeriOfCircle, areaAndPeriOfRectangle,areaAndPeriOfSquare }





