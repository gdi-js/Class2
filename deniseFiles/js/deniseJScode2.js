 /*
    #######################################################
    FILENAME: mycode.js
    OVERVIEW: GDI JS Class 2
    PURPOSE: Different Let's Develop It Solutions
    #######################################################
*/

/*	
	######################################################
	To declare (create) a function, you can give it a name, 
	then include all the code for the function inside curly 
	brackets {}
	#######################################################
*/
function parrotFacts() {
  console.log('Some parrot species can live for over 80 years');
  console.log('Kakapos are a critically endangered flightless parrot');
}

/*
	######################################################
	Let’s Develop It 2.1
	Write a function that outputs a sentence. 
	Then invoke that function later in your code.
	Print it out to your HTML page using 
	document.getElementById("TARGET").innerHTML=(variable 
	or text);
	######################################################
*/
function sentence(){
	var mySentence = "Hello I'm Denise Nguyen!";
	//TEST TO SEE IF IT WORKS	
	//console.log(mySentence);
	//PRINTS OUT TO THE HTML PAGE 
	//LOOKS FOR p1 ID THEN PRINTS mySentence
	document.getElementById("p1").innerHTML=(mySentence);
	//FILL IN NUMBER 5 WITH IN MY PARAGRAPH 
	var kittyNumber = 5;
	document.getElementById("p2").innerHTML=(kittyNumber);
}

/*
	######################################################
	Let’s Develop It 2.2
	Write a simple program to combine a first name and a 
	last name inside a function. 
	Then update the function to accept a first and last 
	name as arguments.
	######################################################
*/
//Prints to HTML page when function is called
function nameFunction1(){
    var firstName = 'Denise';
    var lastName = 'Nguyen';
    var fullName = firstName + ' ' + lastName;    // value is 'Denise Nguyen'
	//console.log(fullName);
    document.getElementById("Name1").innerHTML = fullName;
}

function nameFunction2(){
    var firstName = 'Wonder';
    var lastName = 'Woman';
    var fullName = firstName + ' ' + lastName;  
    document.getElementById("Name2").value = fullName;
}

function nameFunction3(){
	var firstName = 'Sailor';
	var lastName = 'Moon';
	var fullName = firstName + ' ' + lastName;  
	document.getElementById("Name3").innerHTML = fullName;
}

//Return statement
function square(num) {
  return num * num;
}
console.log(square(4));       // outputs '16'
var squareOfFive = square(5); // squareOfFive equals '25'


/*
	######################################################
	Let’s Develop It 2.3
	Add a return statement to your 'name' function. 
	Use that function to set the value of a variable.
	######################################################
*/
function nameStatement(firstName,lastName) {
	return "Hello " + firstName + " " + lastName;
}
console.log(nameStatement("John","Smith"));
console.log(nameStatement("Jane","Smith"));

function myFunction(first,last) {
	return 'Hello ' + first + " " +last;
}
/*
	setName(); passes arguments into a helper function
	sets the return value of the helper function into the input
	field of the HTML
*/
function setName(first,last){
	document.getElementById("Name2").value = myFunction(first,last);
 }

/*	
	######################################################
	Let’s Develop It 2.4
	Make a variable called "temperature". Write some code 
	that tells 	you to put on a coat if it is below 50 
	degrees.
	######################################################
*/
function temp1(){
	var temperature= 30;
	if (temperature < 50) {
		console.log("It is " + temperature + " degrees outside \n  Put on a coat");
	} 
}
//temp1();

/*
	######################################################	
	Let’s Develop It 2.5
	Modify your "wear a coat" code for these conditions:
	Implement with user input and onclick.
	CONDITIONS
	If it's less than 50 degrees, wear a coat.
	If it's less than 30 degrees, wear a coat and a hat.
	If it's less than 0 degrees, stay inside.
	Otherwise, wear whatever you want.
	######################################################
*/
var userInputTemperature;	//GLOBAL VARIABLE
function temp2(){
	userInputTemperature = document.getElementById("tempInput").value;
	if (userInputTemperature <= 0){
		alert("Stay inside");
	} 
	else if (userInputTemperature < 30) {
		alert('Wear a coat and a hat');
	} else if (userInputTemperature < 50) {
		alert('Put on a coat');
	} else if (userInputTemperature < 65) {
		alert('Wear just a sweater');
	}
	else {
		alert('Wear whatever you want(:');
	}
}

/*
	######################################################
	Let’s Develop It 2.6
	Add a logical operator to your "what to wear" program.
	######################################################
*/
function temp3(){	
	var elem = document.createElement("img")
	userInputTemperature = document.getElementById("tempInput").value;
	if (userInputTemperature < 0 || userInputTemperature > 100) {
		alert(' STAY INSIDE!!!! it is terrible out there');
	} else if (userInputTemperature < 30) {
		alert('Wear a coat and a hat');
		document.getElementById("whatToWear").appendChild(elem).style.width = "40%";
		elem.src = 'images/both.png';
	} else if (userInputTemperature < 50) {
		alert('Put on a coat');
		document.getElementById("whatToWear").appendChild(elem).style.width = "40%";
		elem.src = 'images/PinkCoat.png';
	} else if (userInputTemperature < 65) {
		alert('Wear just a sweater');
		document.getElementById("whatToWear").appendChild(elem).style.width = "40%";
		elem.src = 'images/sweaterPink.png';
	} else {
		alert('Wear whatever you want(:');
	}
}

function kittyNeeds(person) {
	return 'I need ' + person + '!!!!! =^.,.^=';
}

console.log(kittyNeeds("Michi"));