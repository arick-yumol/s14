let firstName = prompt("First Name");
let lastName = prompt("Last Name");
let emailAddress = prompt("E-mail Address");
let mobileNumber = prompt("Mobile Number");

function printUserInfo(lname, fname, email, mobile) {
	console.log('Name: ' + fname + ' ' + lname);
	console.log('Email: ' + email);
	console.log('Number: ' + mobile);
}

printUserInfo(lastName, firstName, emailAddress, mobileNumber);