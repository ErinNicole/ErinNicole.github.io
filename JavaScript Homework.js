document.getElementById("title").innerHTML = "JavaScript Homework";
document.getElementById("title").style.color = "black";

var myNumber = 42;

myNumber = myNumber+10;

console.log(myNumber+100);

console.log(500);

var username = "Erin";

console.log(username + "123");

var bigBoolean = myNumber == 100;

console.log(bigBoolean);

var users = ["Dave", "Dan", "Mengyue"];

console.log(users[1]);

var complexUser = {
    name:  "Erin Shackelford",
    zip: 2138,
    color: "red",
    dog: false,
    greet: function(greeting){
        console.log(greeting + " Dave!")
    }
};
complexUser.greet("Goodbye ");

console.log(complexUser.color);

var sayHello = function(name){

    console.log("Hello " + name);
}

sayHello("Dave");
sayHello(complexUser.name);

var plusTen = function(num) {
    return num + 10;
}

var newNum = plusTen (20);

console.log(newNum);

if (newNum > 100) {
    console.log ("Wow!");
}
else if (newNum > 50) {
    console.log("Ok, not so bad.");
}
else {
    console.log("Not so big . . .");
}

var greaterThanTen = function(num) {
    if(num > 10) {
        console.log("Yes!");
    }
    else {
        console.log("No!");
    }
    return num > 10;
}

var checkNumber = greaterThanTen(5);

console.log(checkNumber);
