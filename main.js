/* JS */

/* Q1 way-1 */

var sum = sum(1, 2, 3);
console.log("Answer-1.a function of Sum of three arguments/method.a" + '\n' + sum);

function sum(a, b, c) {
    return a + b + c;
}
/* Q1 way-2 */
function plus() {
    var plus = 0;
    for (var i = 0; i < arguments.length; i++) {
        plus += arguments[i];
    }
    return plus;
}

console.log("Answer-1.a function of Sum of three arguments/method.b" + '\n' + plus(1, 2, 3)); // returns 6

/* Q2 */
colorCar("red");

function colorCar(color) {
    console.log("Answer-2.a function that recieves color value" + '\n' +
        "a " + color + " car");
}
/*  Q3 way-1 */
let person = {
    firstName: "Bader",
    lastName: "Ul-hasan",
    age: 30,
    learning: "JS"
};
info();

function info() {
    console.log("Answer-3. Object with properties call by function/method.a" + '\n' + 'First Name: ' + '' + person.firstName + ' ' + 'Last Name: ' + ' ' + person.lastName + ' ' + 'age: ' + '' + person.age + ' ' + 'learning: ' + ' ' + person.learning);
}
/*  Q3  way-2 */
myInfo();

function myInfo() {
    var person = {
        firstName: "Bader",
        lastName: "Hasan",
        age: 30,
        eyeColor: "brown"
    };

    console.log(person);
}

/* Q4  way-1*/
vehicleType("red", 1);

function vehicleType(color, type) {
    if (type == 1) {
        type = "car";
    } else {
        type = "motorbike";
    }

    console.log("Q-4 way-1 " + "a " + color + " " + type);
}
/* Q4  way-2*/
function vehicletype(color, code) {
    let string = "a " + color + " ";

    if (code === 1) {
        string = string + "car";
    } else if (code === 2) {
        string = string + "motorbike";
    }

    return string;
}
console.log("Q4 way-2 " + vehicletype("blue", 2));

/* Q5  way-1*/
console.log("Q5 way-1 ");
3 === 3 ? console.log('yes') : console.log('no');
/* Q5  way-2*/
console.log("Q5 way-2 " + (3 === 3));


/* Q6 way-1 */
vehicle("red", 2, 4);
vehicle("blue", 1, 0);

function vehicle(color, type, cond) {
    if (type == 1) {
        type = "car";
    } else {
        type = "motorbike";
    }

    if (cond == 0 || cond == 1) {
        cond = "new";
    } else {
        cond = "used";
    }
    console.log("Q6 way-1 ");
    console.log("a " + color + " " + cond + " " + type);
}
/* Q6 way-2 */

function Vehicles2(color, code, age) {
    let string = "a " + color;

    if (age === 1) {
        string = string + " new";
    } else if (age > 1) {
        string = string + " used";
    }

    if (code === 1) {
        string = string + " car";
    } else if (code === 2) {
        string = string + " motorbike";
    }

    return string;
}
console.log("Q6 way-2 " + Vehicles2("blue", 1, 2));


/* Q7  way-1*/
let vehicles = [];
vehicles[0] = "car";
vehicles[1] = "caravan";
vehicles[2] = "bike";
console.log("Q7.way first to make list\n " + vehicles);
/* Q7  way-2*/
let LisT = ["motorbike", "caravan", "bike"];
console.log("Q7.2nd way to make list\n " + LisT);


/* Q8 way-1*/
console.log("Q8.Way to access third element in the list\n " + LisT[2]);
/* Q8 way-2*/
let bike = LisT[2];
console.log("Q8.b Third Item of List = " + bike);


/* Q9 way-1*/
vehicle1("green", 3, 1);

function vehicle1(color, type, cond) {

    if (cond == 0 || cond == 1) {
        cond = "new";
    } else {
        cond = "used";
    }
    console.log("Q9 way-1 ");
    console.log("a " + color + " " + cond + " " + vehicles[--type]);
}
// Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicles2(color, code, age) {
    let string = "a " + color;

    if (age === 1) {
        string = string + " new ";
    } else if (age > 1) {
        string = string + " used ";
    }

    string = string + LisT[--code];

    return string;
}
console.log("Q9-way-2" + vehicles2("green", 2, 1));

// /* Q10 */Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

// Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.
console.log("Q10 way-1 ");
console.log("Amazing Joe's Garage, we service");

for (var i = 0; i < vehicles.length; i++)
    console.log(" " + vehicles[i] + ",");
/* way02 */
function advert() {
    let string = "Amazing Joe's Garage, we service cars, ";

    for (let i = 0; i < LisT.length; i++) {
        if (i === LisT.length - 1) {
            string = string + 'and ' + LisT[i] + "s.";
        } else {
            string = string + LisT[i] + "s, ";
        }
    }

    return string;
}
console.log("Q10.way-2 " + advert());


/* Q11 What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10? */



LisT.push("bicycle");
console.log("Q11 " + LisT);
console.log("Q11 " + advert());


/* Q12 Create an empty object */
let Empty = new Object();
console.log("Q12. object's length = " + Empty.length);

/* Q13 Create an object that contains the teachers that you have had so far for the different modules.*/
var teachers = {
    module1: "Zaki & Jakub",
    module2: "Marta & Moritz",
    module3: "Kevin",
    module4: "Pankej & Abed"
};
console.log(teachers);

/* Comapring values of 2 objects which it should be by refrence not by object value.
Abstract Equality Comparison (==) it consider number as string like in obj1, value of a is equal to value of b because of abstract equality comparison because it is user friendly and tries to calculate and resolve basic problems by itself.
Strict Equality Comparison (===):  */

var obj1 = {
    a: 1,
    b: "this is the letter b",
    c: {
        foo: "what is a foo anyway",
        bar: [1, 2, 3, 4]
    }
};

var obj2 = {
    a: "1",
    b: "this is the letter b",
    c: {
        foo: "what is a foo anyway",
        bar: [1, 2, 3, 4]
    }
};
var obj1 = obj2;

function compareValues(obj1, obj2) {
    if (obj1 == obj2)
        return true;
    else
        return false;
}

function compareTypes(obj1, obj2) {
    if (obj1 === obj2)
        return true;
    else
        return false;
}
console.log('Q=13 comparing object values');
console.log(compareValues(obj1, obj2));
console.log(compareTypes(obj1, obj2));
/* Q14 write a function that takes another function as an argument and runs it.*/
// Add a property to the object you just created that contains the languages that they have taught you.

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
console.log('Q=14 nested function');
console.log(addSquares(2, 3)); // returns 13
console.log(addSquares(3, 4)); // returns 25
console.log(addSquares(4, 5)); // returns 41

teachers.languages = "HTML, CSS, JS1, JS2";
console.log('Q=14  Add a property to the object you just created that contains the languages that they have taught you.');
console.log(teachers);

/* Q15 Write some code to test two arrays for equality using == and ===. Test the following:*/
var x = [1, 2, 3];
var y = [1, 2, 3];
var z = y;

function testEquality(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}
console.log("Q11 How to test equality of arrays: " + testEquality(x, y));
/*What do you think will happen with x == y, x === y and z == y and z == x? Prove it!*/
console.log("Q15 " + (x == y));
console.log("Q15 " + (x === y));
console.log("Q15 " + (z == x));
console.log("Q15 " + (z === x));
console.log("Q15 " + (z == y));
console.log("Q15 " + (z === y));

/* Q-16 Take a look at the following code:

     let o1 = { foo: 'bar' };
     let o2 = { foo: 'bar' };
     let o3 = o2;
Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

Does the order that you assign (o3 = o2 or o2 = o3) matter? */
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

o2.foo = "bar1";
console.log(o2);
console.log(o3);
/* concept of passing value 
 by refernece of object or array
*/

let a = 1;
let b = a;

a = 2;

console.log(a);
console.log(b);

/* Q17. What does the following code return? (And why?) */

let bar2 = 42;

console.log(typeof typeof bar2);
var y = typeof bar2;
console.log(y);
console.log(typeof y);

console.log("Q17 It will return a " + typeof y + ".\n This is because the type of 'bar' is a 'number'. The type of the 'number' string is a 'string'");

// Code for form validation 
$(document).ready(function() {
    $('.submit').click(function(event) {

        console.log('clicked button')
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()
        if (email.length > 5 && email.include('@') && email.include('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }
        if (subject.length >= 2) {
            statusElm.append('<div>Subject is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Subject is not valid</div>')
        }
        if (message.length >= 10) {
            statusElm.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div>')
        }
    });

});