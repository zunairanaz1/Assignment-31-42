var todaysDate = new Date();
document.write(todaysDate);

var month = new Date();
var monthString = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var currentMonth = month.getMonth();
document.write("Current month: " + monthString[currentMonth]);
var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturaday"];
var today = new Date();
var weekNow = today.getDay();
var final = week[weekNow];
final = final.slice(0, 3);
document.write("Today is " + final);

var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturaday"];
var today = new Date();
var weekNow = today.getDay();
var final = week[weekNow];
if (final === "Saturaday" || final === "Sunday") {
    document.write("It's Fun day")
}

var today = new Date();
var month = today.getDate();
if (month <= 15) {
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month");
}

var today = new Date();
var start = today.getTime();
document.write("Current Date: " + today + "</br>");
document.write("Elapsed milliseconds since January 1, 1970: " + start + "</br>");
document.write("Elapsed minutes since January 1, 1970: " + (start / (1000 * 60)));

var today = new Date();
var time = today.getHours();
if (time <= 12) {
    document.write("It's AM");
} else {
    document.write("It's PM");
}

var today = new Date("Dec 31, 2020");
document.write(today);

var today = new Date();
var past = new Date("April 13, 2015")
var LatestToday = today.getTime();
var LatestPast = past.getTime();
var sub = LatestToday - LatestPast;
var Final = (sub / (1000 * 60 * 60 * 24));
document.write(Math.floor(Final) + " days have passed since 1st Ramadan,2021");

var pastCondition = new Date("December 5, 2015");
var pastDay = pastCondition.getTime();
var Final = (pastDay / 1000);
document.write("On reference date " + pastCondition + "</br>");
document.write(Final + " seconds had passed since begnning of 2015");

var nowDate = new Date();
var later = new Date("April 18, 2021 11:00:00");
document.write("current date: " + nowDate + "</br>")
document.write("1 hour ago,it was " + later);

var nowDate = new Date();
var yearsBack = new Date("April 18, 1921");
document.write("current date: " + nowDate + "</br>")
document.write("100 years back,it was " + yearsBack)

var present = new Date();
var year = present.getFullYear();
var user = prompt("Enter your age");
var result = year - user;
document.write("Your age is " + user + "</br>");
document.write("Your birth year is " + result);

var customerName = prompt("Enter your name");
var currentMonth = prompt("Enter Month");
var numUnits = prompt("Enter Number of Units");
var chargesUnits = prompt("Enter charges per unit");
document.write("<h1>K-Electric Bill</h1> </br>");
document.write("Customer Name: " + "<b>" + customerName + "</b>" + "</br>");
document.write("Month: " + "<b>" + currentMonth + "</b>" + "</br>");
document.write("Number of units: " + "<b>" + numUnits + "</b>" + "</br>");
document.write("Charges per unit: " + "<b>" + chargesUnits + "</b>" + "</br> </br>");
document.write("Net Amount Payable (within Due Date): " + "<b>" + (numUnits * chargesUnits) + "</b>" + "</br>");
document.write("Late Payment Surcharge: " + "<b>" + "350" + "</b>" + "</br>");
document.write("Gross Amount Payable (after Due Date): " + "<b>" + ((numUnits * chargesUnits) + 350) + "</b>");


// ***********************************************Chapter 35-38*********************************************


function getIt() {
var nowDate = new Date();
    document.write(nowDate);
}

getIt();


function fullName() {
    var fName = prompt("Enter your first name");
    var lName = prompt("Enter your last name");
    document.write(fName + " " + lName);
}

fullName();


function addNum() {
    fNum = +prompt("Enter First number");
    lNum = +prompt("Enter Second Number");
    document.write(fNum + lNum);
}

addNum();


function calculator() {
    num1 = parseInt(prompt("Enter First number"));
    num2 = parseInt(prompt("Enter Second number"));
    operator = prompt("Enter operator you want ot perform");
    if (operator === "+") {
        document.write(num1 + num2);
    }
    if (operator === "-") {
        document.write(num1 - num2);
    }
    if (operator === "/") {
        document.write(num1 / num2);
    }
    if (operator === "*") {
        document.write(num1 * num2);
    }
    if (operator === "%") {
        document.write(num1 % num2);
    }
}

calculator();


function squareArgument(num) {
    num;
    num = num * num;
    document.write(num);
}

squareArgument(2);

function squareArgument() {
    num = prompt("Enter a number would like to square");
    num = num * num;
    document.write(num);
}

squareArgument();


function factorial() {
    num = parseInt(prompt("Enter your factorial number"));
    sum = 1;
    for (var i = 1; i <= num; i++) {
        sum *= i;
    }
    document.write(sum);
}

factorial();


function counting() {
    var startNum = +prompt("Enter start number from?");
    var endNum = +prompt("enter ending number to");
    var sum = 0;
    for (var i = startNum; i <= endNum; i++) {
        sum += i;
    }
    document.write(sum);
}

counting();



function nestedCalculation() {
    base = parseInt(prompt("Value of Base"));
    perpendicular = parseInt(prompt("Value of perpendicular"));
    hypotenuse = Math.sqrt(Math.pow(base, 2) + Math.pow(perpendicular, 2));
    document.write("Outer function: Hypotenuse = " + hypotenuse + "</br>");
    document.write("Inner function: square of base: " + Math.pow(base, 2) + " Square of perpendicular: " + Math.pow(perpendicular, 2));
}

nestedCalculation();


function argument(width, height) {
    A = width * height;
    document.write("Area of rectangle: " + A);
}

argument(2, 100);


function palindrome() {
    word = prompt("Enter a word");
    len = word.length;
    mid = Math.floor(len / 2);
    for (var i = 0; i < mid; i++) {
        if (word[i] !== word[len - 1 - i]) {
            document.write("It's not Palindrome");
            break;
        }
        document.write("It's Palindrome");
        break;
    }
}

palindrome();


//***************************************************************************************************

function uppercase(str) {
    array1 = str.split(" ");
    newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    document.write(newarray1.join(" "));
}

uppercase("the quick brown fox");


function longest(str) {
    var result;
    var arr = str.split(" ").map((word) => word);
    result = arr.reduce((a, b) => {
        return a.length > b.length ? a : b;
    });
    document.write(result);
}

longest("Web Development Tutorial");


function occur(str, char) {
    var arr = str.split("")
    document.write(arr.filter(e => e == char).length);
}

occur("JSResourceS.com" , "o")


function calcCircumference() {
    radius = 36;
    circumference = 2 * 3.142 * radius;
    document.write("The circumference is: " + circumference + "</br>")
}

calcCircumference();

function calcArea() {
    radius = 36;
    area = 3.142 * Math.pow(radius, 2);
    document.write("The area is: " + area);
}

calcArea();


// ********************************************Chapter 38-42*****************************************


function customPower() {
    a = prompt("Enter value of a");
    b = prompt("Enter raised value b");
    document.write(Math.pow(a, b));
}

customPower();


function checkLeapYear() {
    year = prompt("Enter year to check for leap year");
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        document.write(year + ' is a leap year');
    } else {
        document.write(year + ' is not a leap year');
    }
}

checkLeapYear();


function fOne() {
    a = +prompt("Enter a");
    b = +prompt("Enter b");
    c = +prompt("Enter c");
    fTwo(a, b, c)
    document.write("Area of triangle: " + area);
}

function fTwo() {
    s = ((a + b + c) / 2);
    area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

fOne();
fTwo();


function main() {
    sub1 = +prompt("Enter First subject Marks");
    sub2 = +prompt("Enter Second subject Marks");
    sub3 = +prompt("Enter Third subject Marks");
    totalSub = sub1 + sub2 + sub3;
    average(totalSub);
    percentage(totalSub);
    document.write("Average: " + avg + "</br>");
    document.write("Percentage: " + per);
}

function average() {
    avg = (totalSub) / 3;

}

function percentage() {
    per = (totalSub * 100) / 45;
}
main();
average();
percentage();


function indexOf() {
    textt = "Zunaira naz"
    document.write(textt.indexOf("n"));
}

indexOf();


function dele() {
    tex = "He is a good boy";
    vowel = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < vowel.length; i++) {
        for (var j = 0; j < tex.length; j++) {
            if (vowel[i] === tex.charAt(j)) {
                tex = tex.slice(0, j).concat(tex.slice(j + 1, tex.length))
            }
        }
    }
    document.write(tex);
}

dele();


function findOccurances(str) {
    var words = str.split(" ");
    var count = 0;
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            var char = words[i].slice(j, j + 1).toLowerCase();
            var nextChar = words[i].slice(j + 1, j + 2).toLowerCase();
            switch (char) {
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                    switch (nextChar) {
                        case "a":
                        case "e":
                        case "i":
                        case "o":
                        case "u":
                            count++;
                    }
            }
        }

    }
    return count;
}


function kilom(km) {
    km;
    m = km * 1000;
    cm = km * 1000 * 100;
    f = km * 3280.84;
    inches = km * 39370.08;
    document.write("Meter: " + m + "</br> Centimeter: " + cm + " </br> Feet: " + f + "</br> Inches: " + inches);
}
kilom(250);


function overTime() {
    ratePerhr = 12;
    worked = 40;
    document.write("Over time paid: " + (ratePerhr * worked));
}

overTime();


function cashier() {
    withDrawAmount = prompt("Enter amount to withdraw!!", 470);
    hundredNote = withDrawAmount.charAt(0);
    fif = withDrawAmount.slice(1)
    fifFinal = Math.floor(fif / 50);
    ten = withDrawAmount.slice(1);
    tenFinal = ten % 50;
    tenFinal = tenFinal / 10;
    document.write(hundredNote + " hundred note </br>");
    document.write(fifFinal + " fifty note </br>");
    document.write(tenFinal + " ten note </br>");
}

cashier();