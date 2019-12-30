// function driversLicense5(passedTest) {
//     if(passedTest) {
//         var firstName = 'john';
//         var yearOfBirth = 1990;
//     }

//   console.log(firstName + ', born in' + yearOfBirth + ',is now officially allowed to drive a car.');



// }


// driversLicense5(true);

// // ES6

// function driverLicense6(passedTest) {
//     let firstName;
//     const yearOfBirth = 1990;
//     if(passedTest) {
//         firstName = 'john';
//     }
//     console.log(firstName + ', born in' + yearOfBirth + ',is now officially allowed to drive a car.');

// }
// driverLicense6(true);


// // var i=23;
// for(var i=0; i<5; i++){
//     console.log(i);
// }
// // console.log(i);

// //blocks and IIFEs

// {
//     const a=1;
//     let b=2;
//     var c = 3;
// }
// console.log(3);


// //ES5
// (function() {
//     var c = 3;
// })();



//  // Strings

// let firstName = 'john';
// let lastName = 'smith';
// const yearOfBirth = 1990;

// function calcAge(year) {
//     return 2016 - year;
// }

// //ES 5

// console.log('this is ' + firstName + '' + lastName + '.He was born ' + yearOfBirth + '. Today , he is ' +calcAge(yearOfBirth) + 'years old.');

// //ES6

// console.log(`this is ${firstName}. He was born in ${yearOfBirth} Today he is  ${calcAge(yearOfBirth)} years old`);


// const n = `${firstName} ${lastName}` ;
// console.log(n.startsWith('j')); 
// console.log(n.endsWith('sm')); 
// console.log(n.includes('oh')); 
// console.log(`${firstName}`. repeat(5)); 


//  // Aroow functions 

//  const years = [1990 , 1965 , 1982, 1937];

//  //ES 5
//  var ages5 = years.map(function(el){
//      return 2016 - el;
//  });
//  console.log(ages5);


// //ES 6
// let ages6 = years.map((el, index)  => `Age elemnt ${index + 1}: ${2016-el}.`);
// console.log(ages6);

// ages6 = years.map((el, index)  => {
//     const now = new 
//     Date().getFullYear();
//     const age = now - el;
//     return  `Age elemnt ${index + 1}: ${age}.`
// } );
// console.log(ages6); 

// //ES5 
//  var box5 ={
//      color : 'green',
//      position: 1,
//      clickMe : function() {

//          var self = this;

//          document.querySelector('.green').addEventListener('click', function(){
           
//            var str = 'This is box number' + self.position + ' and it is ' + self.color;
//            alert(str);      

//          });
//      }
//  }
// //  box5.clickMe();


// //ES6
// const box6 ={
//     color : 'green',
//     position: 1,
//     clickMe : function() {

       

//         document.querySelector('.green').addEventListener('click', () => {
          
//           var str = 'This is box number' + this.position + ' and it is ' + this.color;
//           alert(str);      

//         });
//     }
// }
// // box6.clickMe();


// // //ES66
// const box66 ={
//     color : 'green',
//     position: 1,
//     clickMe :() => {

       

//         document.querySelector('.green').addEventListener('click', () => {
          
//           var str = 'This is box number' + this.position + ' and it is ' + this.color;
//           alert(str);      

//         });
//     }
// }
// box66.clickMe();

// //ES5

// function Person( name) {
//     this.name = name;
// }
// Person.prototype.myFriends5 =  function(friends) {
//     var arr = friends.map(function(el){
//         return this.name + 'is friends with ' + el;   
//     }.bind(this)
//     );
//  console.log(arr);
// }

// var friends = ['bob', 'jane', 'mark'];
// new
// Person('john').myFriends5(friends);


// // //ES6 


// Person.prototype.myFriends6 =  function(friends){
//     var arr = friends.map(
//         el =>`${this.name} is
//      friends with  ${el}` 
//     );
//  console.log(arr);
// }
// new
// Person('mike').myFriends6(friends);




// // Destructuring

// //Es6

// const [name,age] = ['john', 26];
//  console.log(name,age);

//  const obj = {
//      firstName: 'john',
//      lastName: 'smith'
//  };

//  const {Name, tName} = obj;
//  console.log(firstName);
//  console.log(lastName);

//  const {firstName : a, lastName: b} = obj;

// console.log(a);
// console.log(b);


// function calcAgeRetirement(year) {
//     const age = new 
//     Date().getFullYear() - year;
//     return [ age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);


// ///////////////////////////////////////////////////

// //ES6 Arrays

// const boxes = document.querySelectorAll('.box');

// // Es5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur){
//     cur.style.backgroundColor = 'dodgerblue';
// });
// console.log(boxesArr5);


// //ES6

// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'Red');



// //ES5

// for(var i=0; i<boxesArr5.length;i++) {
//     if(boxesArr5.className === 'box blue'){
//         continue;
//     }
//     boxesArr5[i].textContent = 'I changed to blue';
// }

// //Es6

// for(const cur of(boxesArr6)) {
//     if(cur.className.includes('blue') === 'box blue' ) {
//         continue;
//     }

//     cur.textContent = 'I changed to blue';
// }


// //ES5
// var ages = [12,17,8,21,14,11];
// var full = ages.map(function(cur) {
//     return cur >= 18 ;
// } );
// console.log(full);

// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);


// //ES6

// console.log(ages.findIndex(cur => cur >= 18 ));
// console.log(ages.find(cur => cur >=18));





// Spread Operator

// function addFourAges (a,b,c,d) {
//     return a + b + c + d;
// }

// var sum1 = addFourAges(18,30,12,12);
// console.log(sum1);


// //Es5
// var ages = [18,30,12,21];
// var sum2 = addFourAges.apply(null,ages);
// console.log(sum2);


// //Es6

// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['john', 'jane', 'mark'];
// const familyMiller = ['mary', 'bob' , 'Ann'];
// const bigFamily = [familySmith, 'lilly' , familyMiller];
// console.log(bigFamily);


// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];

// Array.from(all).forEach(cur => cur.style.color = 'purple');



// //// Rest parameters 

//  //ES5

// //  function isFullAge5(){
// // var argsArr =Array.prototype.slice.call(arguments);
// // argsArr.forEach(function(cur)  {
// //     console.log((2016 - cur) >= 18);
// // });
// //  }
// //  isFullAge5(1990,1996,1998);

// //Es6

// // function isFullAge6(...years){
// // years.forEach(cur => console.log((2016 - cur) >= 18));
// // }
// // isFullAge6(1990,1997,1999,1965);


// //Default parameter

// // function SmithPerson(firstName, yearOfBirth, lastName='jiii', nationality) {
   
   
// // //    lastName === undefined ? lastName = 'smith' : lastName = lastName;
// // //    nationality === undefined ? nationality = 'american': nationality = nationality;
    
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.yearOfBirth = yearOfBirth;
// //     this.nationality = nationality;
// // }
 

// // //ES6 

// // //  function SmithPerson(firstName, yearOfBirth, lastName='smiht', nationality='indian') {

        
// // //      this.firstName = firstName;
// // //      this.lastName = lastName;
// // //      this.yearOfBirth = yearOfBirth;
// // //      this.nationality = nationality;

// // //  }
// // var john = new SmithPerson('john', 1990);

// // var emily = new SmithPerson('emily', 1987,'dianz' ,'spanish');



// // Maps



// const question = new Map();

// question.set('question', 'what is the official name of javascript?');
// question.set(1, 'Es5');
// question.set(2,'Es6');
// question.set(3,'Es2015');

// question.set('correct',3);
// question.set(true,'Correct answer :D');
// question.set(false,'wrong please try again :D');


// console.log(question.get('question'));
// console.log(question.size);

// if(question.has(3)) {
//     console.log('Answer 3 is here');
// }
 
// // question.forEach((value, key) => console.log(`This is ${key}, and its set to ${value}`));

// for(let [key, value] of question.entries()) {

//   if(typeof(key) === 'number') {
//     console.log(`Answer ${key}:  ${value}`);
//   }
// }

// const ans = parseInt(prompt('write the correct answer'));

// console.log(question.get(ans === question.get('correct')));

//Classses

// //Es5 

// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = 
// function() {
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person5('john', 1990 , 'teacher');


//Es6

class Person6 {
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        // console.log(age);
    }

    static greeting() {
        console.log('hey there');
    }



}

const john6 = new Person6('arun', 1997, 'cricketer');


Person6.greeting();



///////////subclass

// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = 
// function() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person5('john', 1990 , 'teacher');


// var Athlete5 = function(name, yearOfBirth,job, olymicGames, medals)
// {
//     Person5.call(this,name, yearOfBirth, job);
//     this.olymicGames = olymicGames;
//     this.medals = medals;

// }
// Athlete5.prototype = Object.create(Person5.prototype);



//  Athlete5.prototype.wonMedal = 
//  function() {
//      this.medals++;
//      console.log(this.medals);
//  }






// var johnAthlete5 = new Athlete5('john' , 1990 , 'swimmer', 3, 10);

// johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();



//ES 6 


class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olymicGames,medals) {
        super(name,yearOfBirth,job);
        this.olymicGames = olymicGames;
        this.medals =  medals;
    }
    wonMedal(){
        this.medals++;
        console.log(this.medals); 
    }
}
const johnAthlete6 = new 
Athlete6('john', 1998, 'swimmer', 3,19);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();







