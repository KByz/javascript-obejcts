/* var obj = {firstName: "Cygnet", lastName: "Infotech"};

console.log(obj.firstName)
console.log(obj.lastName) */

/* var first = {name: "Manish"};
var second = first;
obj2.firstName // Manish
second.name = "Cygnet";
first.name // Cygnet

    console.log (obj2.firstName)*/



/* var companyInfo = new Object(); // initialise empty object

// assign the properties to above object
companyInfo.name = "Cygnet Infotech"
companyInfo.code = "0606";
companyInfo.city = "Auckland";
companyInfo.getName = function()
{
	return this.name;
} 

console.log (companyInfo.getName()); */

/* var studentInfo = new Object(); // initialise empty object
// assign the properties to the student
studentInfo.name = "Kira Byrne";
studentInfo.id = "13509995";
studentInfo.course = "BIT";
studentInfo.gradeavg = 8.5;
studentInfo.email = "kb@nmit.ac.nz";
studentInfo.phone = "021 123 4567";
studentInfo.getid = function()
{
    return this.id;
}

console.log (studentInfo.getid()); */

function Book(name, year)
{
	this.name = name;
	this.year = year;
}

var firstBook = new Book("ReactJS Ebook", 2016);
var secondBook = new Book ("JavaScript Ebook", 2017);

console.log(firstBook.name, firstBook.year);
console.log(secondBook.name, secondBook.year);

firstBook instanceof Book //true