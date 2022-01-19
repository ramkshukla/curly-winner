console.log("Hello World!");

//commment 
// alert("hello, this is ram");


//Variables
var b = "smoothie";
// console.log(b);

var someNumber = 45;
console.log(someNumber);

//Manipulate DOM with Javascript 
/*...It's just a fancy of way saying change html with javascript
*/

// var age = prompt("whats your age?");
// document.getElementById("someText").innerHTML=age;

//Number in javascript
var num1 = 10;

// /Increment num1 by 1
// num1 = num1 + 1;
num1++;
console.log(num1);

//Decrement num1 by 1
num1--;
console.log(num1);

//multiply * , Divide, remainder %
console.log(num1/10);

//Increment number by 10;
num1 += 10
console.log(num1);

//Functions

// create
function fun(){
    alert("this is a function");
}
//call
// fun();

// Lets create a that take in  a name ans output a hello name

function greeting(name){

    var result = 'Hello ' + name;
    console.log(result);
}
// var yourName = prompt("what is your name");
// greeting(yourName);

//How of argument work in function?
function sumNumber(num1, num2){
    var result = num1 + num2;
    console.log(result);
}

// sumNumber(10, 10);


//while loop

var num = 0;
while(num<100){
    num += 1;
    console.log(num);
}

//for loop
for(let num=0;num<=100; num++){
    console.log(num);
}


//Data types in Javascript
let yourAge = 18;// number
let yourName = 'Bob';//string
let name = {name : 'Jane', last : 'Doe'};//object
let truth = false;//boolean
let groceries = ['apples', 'banana', 'oranges'];//array
let random;//undefined
let nothing = 'null';//null value

//String in Javascript
// let fruits = 'banana, apple, orange, blackberry';
// let morefruits = 'banana\napplle';
// console.log(morefruits);
// console.log(fruits.length);
// console.log(fruits.indexOf('nan')); 
// console.log(fruits.slice(2, 6));
// console.log(fruits.replace('ban', 123));
// console.log(fruits.toUpperCase());
// console.log(fruits.toLowerCase());
// console.log(fruits.charAt(2));
// console.log(fruits[2]);
// console.log(fruits.split(','));
// console.log(fruits.split(''));

//Arrays in JavaScript
let fruits = ['banana', 'apple', 'oranges', 'pineapplle'];
fruits = new Array('banana', 'apple', 'orange', 'pineapple');
console.log(fruits[2]);
fruits[0] = 'pear';
console.log(fruits);
for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}

//array common  methods.
console.log('to String', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits); // removes last item
console.log(fruits.push('blackberries'), fruits); // appends item

let emptyArray = new Array();
for(let num = 0; num <= 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

//Objects in Javascript;
//dictionary in Python
let student = {
    first : 'Ram',
    last : 'Shukla',
    age : 24,
    height : 5.8,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};
// console.log(student.first);
// console.log(student.last);
// student.first = 'notRam';
// console.log(student.first);
// student.age++;
// console.log(student.age);

console.log(student.studentInfo());


//conditions in Javascript
// var age = prompt("what your age ? ");
if((age >= 18) && (age <= 35)){
    status = 'target demo';
    console.log(status)
}else{
    status = 'not my audience';
    console.log(status);
}

switch(2){
    case 0:
        text = "weekend";
        break;
    case 5: 
        text = "weekend";
        break;
    case 6:
        text = "weekend";
        break;
    default:
        text = "weekday";
}
console.log(text);

