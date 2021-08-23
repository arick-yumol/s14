/*//This is an example of a statement.
//Javascript works may or may not use the (;) semicolon.
alert("Hello World");

// Variable - can be changed after initial declaration
let name; //variable declaration
name = 'Zuitt';
alert(name);
name = "Coding Bootcamp";
alert(name);

let phrase = "you're the best";
let phrase2 = 'hey man!';

console.log(phrase2);
let myScore = 98.50;
console.log(myScore);
console.log(name);*/

// Contstant - cannot be changed after inital declaration. Constants must declare a value regardless of data type.
/*const boilingPoint = 100;
console.log('Boiling point of water:' + boilingPoint);*/

//boilingPoint = 200;

// Data Types in JS
/*
1. String	(e.g.	let name = 'Zuitt';)
2. Numeric	(e.g.	let score = 200.50;)
3. Boolean | two values, either True or False	(e.g.	let isLegalAge = true;)
												console.log(isLegalAge);
4. undefined
5. Null
*/

/*let course = null;	//null is a value pertaining to nothing or empty
//let course = 0;
console.log(course);*/

// Functions

function makeTriangle() {
	console.log('*');
	console.log('**');
	console.log('***');
	console.log('****');
	console.log('*****');
}

// invoke
// makeTriangle();
// makeTriangle();
// makeTriangle();

// functions with parameter
// function sayHello(name) {
// 	alert('Hellow! ' + name)
// 	console.log('Hellow! ' + name)
// 	console.log('== end of code ===')
// }


// sayHello('John');

// Functions with multiple parameters
// function sayHi(lname, fname) {
// 	console.log('Hi ' + lname + ', ' + fname);
// }

// sayHi('Starks', 'Tony')

function addNum(num1, num2) {
	let x = num1 + num2;
	console.log('the sum is: ' + x);
	// console.log('the sum is:', x);
}

// addNum(12, 5);

function addTwoNums(x, y) {
	// console.log(x+y);
	return x+y;
}

let x = addTwoNums(5, 8);

// console.log(x/5);
// console.log('The sum is' + x);

function doMath(num1, num2) {
	console.log('The sum is: ' + (num1 + num2));
	console.log('The sum is: ' + (num1 * num2));
	console.log('The sum is: ' + (num1 - num2));
	console.log('The sum is: ' + (num1 / num2));
}

// doMath(2,5);

let name = prompt();
console.log(name);