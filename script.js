let shapeLocation = document.getElementById('shape-location');
let shapeInfo = document.getElementById('shape-info');

const xMAX = 600;
const yMAX = 600;

class Shape {
    constructor(x, y) {
        this.div = document.createElement('div');
        this.div.classList.add('shape');
        this.div.id = 'shapeid';
        this.x = x;
        this.y = y;
        this.div.style.display = "inline-block";
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.addEventListener('click', () => {
            this.describe();
        })
        shapeLocation.appendChild(this.div);

    }

    updateLocation() {
        let xVal = randomVal(0, MAX);
        let yVal = randomVal(0, MAX);
        this.div.style.left = `${xVal}px`;
        this.div.style.top = `${yVal}px`;
    }

    describe() {
        let text = `Shape Name: ${this.shapeName}
        <br> Width: ${this.x}
        <br> Height: ${this.y}
        <br> Radius: ${this.radius}
        <br> Area: ${this.area}
        <br> Perimeter: ${this.perimeter}`;
        shapeInfo.innerHTML = text;
    }
}

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
        this.shapeName = "Circle";
        this.div.style.width = `${this.radius}px`;
        this.div.style.height = `${this.radius}px`;
        this.div.style.borderRadius = `${this.radius}px`;
        this.div.style.backgroundColor = "purple";
        this.div.style.border = "0.5px solid white";
        this.x = "not applicable"
        this.y = "not applicable";
        let area = Math.PI * this.radius * this.radius;
        this.area = Math.round(100 * area) / 100;
        let perimeter = 2 * Math.PI * this.radius;
        this.perimeter = Math.round(100 * perimeter) / 100;
    }
}

class Triangle extends Shape {
    constructor(x, y, triangleHeight) {
        super(x, y);
        this.triangleHeight = triangleHeight;
        this.shapeName = "Triangle";
        this.div.style.borderBottom = `${this.triangleHeight}px solid yellow`;
        this.div.style.borderRight = `${this.triangleHeight}px solid transparent`;
        this.radius = "not applicable"
        this.x = this.triangleHeight;
        this.y = this.triangleHeight;
        let area = 0.5 * this.triangleHeight * this.triangleHeight;
        this.area = Math.round(100 * area) / 100;
        let perimeter = 2 * this.triangleHeight * Math.sqrt(2) * this.triangleHeight;
        this.perimeter = Math.round(100 * perimeter) / 100;
    }
}

class Rectangle extends Shape {
    constructor(x, y, rectangleWidth, rectangleHeight) {
        super(x, y);
        this.rectangleHeight = rectangleHeight;
        this.rectangleWidth = 2 * rectangleWidth;
        this.shapeName = "Rectangle";
        this.div.style.border = "0.5px solid white";
        this.radius = "not applicable"
        this.div.style.width = `${this.rectangleWidth}px`;
        this.div.style.height = `${this.rectangleHeight}px`;
        this.div.style.backgroundColor = "green";
        this.x = this.rectangleWidth;
        this.y = this.rectangleHeight;
        let area = 2 * this.rectangleHeight * this.rectangleWidth;
        this.area = Math.round(100 * area) / 100;
        let perimeter = 2 * this.rectangleHeight * 2 * this.rectangleWidth;
        this.perimeter = Math.round(100 * perimeter) / 100;
    }
}

class Square extends Shape {
    constructor(x, y, sideLength) {
        super(x, y);
        this.sideLength = sideLength;
        this.shapeName = "Square";
        this.div.style.border = "0.5px solid white";
        this.div.style.backgroundColor = "red";
        this.radius = "not applicable"
        this.div.style.width = `${this.sideLength}px`;
        this.div.style.height = `${this.sideLength}px`;
        this.x = this.sideLength;
        this.y = this.sideLength;
        let area = this.sideLength * this.sideLength;
        this.area = Math.round(100 * area) / 100;
        let perimeter = 4 * this.sideLength;
        this.perimeter = Math.round(100 * perimeter) / 100;
    }
}

let circleButton = document.getElementById('circleButton');
circleButton.addEventListener('click', makeCircle);

function makeCircle() {
    let getRadius = document.getElementById('input-radius')
    let radius = Number(getRadius.value);
    let x = randomVal(radius, xMAX);
    let y = randomVal(radius, yMAX);

    if (radius > 0 && radius < 601) {
        let circle = new Circle(x, y, radius);
    } else {
        alert("invalid value");
    }

}

let triangleButton = document.getElementById('triangleButton');
triangleButton.addEventListener('click', makeTriangle);

function makeTriangle() {
    let getHeight = document.getElementById('input-triangleHeight')
    let triangleHeight = Number(getHeight.value);
    let x = randomVal(triangleHeight, xMAX);
    let y = randomVal(triangleHeight, yMAX);

    if (triangleHeight > 0 && triangleHeight < 601) {
        let triangle = new Triangle(x, y, triangleHeight);
    } else {
        alert("invalid value");
    }

}

let rectangleButton = document.getElementById('rectangleButton');
rectangleButton.addEventListener('click', makeRectangle);

function makeRectangle() {
    let getRecHeight = document.getElementById('input-retangleHeight');
    console.log(getRecHeight);
    let rectangleHeight = Number(getRecHeight.value);
    let getRecWidth = document.getElementById('input-retangleWidth');
    console.log(getRecWidth);
    let rectangleWidth = Number(getRecWidth.value);
    let x = randomVal(rectangleWidth, xMAX);
    let y = randomVal(rectangleHeight, yMAX);

    if (rectangleHeight > 0 && rectangleHeight < 601) {
        let rectangle = new Rectangle(x, y, rectangleHeight);
    } else {
        alert("invalid value");
    }

    if (rectangleWidth > 0 && rectangleWidth < 601) {
        let rectangle = new Rectangle(x, y, rectangleWidth);
    } else {
        alert("invalid value");
    }
}

let squareButton = document.getElementById('squareButton');
squareButton.addEventListener('click', makeSquare);

function makeSquare() {
    let getSideLength = document.getElementById('input-sideLength')
    let sideLength = Number(getSideLength.value);
    let x = randomVal(sideLength, xMAX);
    let y = randomVal(sideLength, yMAX);

    if (sideLength > 0 && sideLength < 601) {
        let square = new Square(x, y, sideLength);
    } else {
        alert("invalid value");
    }
}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min));
}