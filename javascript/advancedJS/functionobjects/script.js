//function constructor 

var john = {
    name : 'john',
    yearOfBirth :1990,
    job:'teacher'
};

var Person = function(name,yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
   
}
 
     Person.prototype.calculateAge  = function() {
        console.log(2019 - this.yearOfBirth);
    };

    Person.prototype.lastName = 'smith';

var john = new Person('john', 1997 , 'developer');
var arun = new Person('arun', 1998 , 'developer');
var ses = new Person('seshan', 1996 , 'cricketer');

john.calculateAge();
arun.calculateAge();
ses.calculateAge();

console.log(john.lastName);
console.log(arun.lastName);

console.log(ses.lastName);


  
object.create


var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);

 john.name = 'john';
 john.yearOfBirth = 1997;
 john.job = 'coder';

 var jane = Object.create(personProto, {
     name:{ value: 'jane'},
     yearOfBirth: { value: 1968 },
     job: {value: 'coach'}
 });



primitives vs objects 
primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);
 //objects
var obj1 = {
    name:'Arun';
    age:22;
}

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//functions

var age =27;
var obj = {
    name:'jonas',
    city:'chennai'
}; 





passing functions as arguments

var years = [1990,1965,1937,2005,1998];
       //array values, fn-getting func
function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i=0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//passing the function 
function calculateAge(el) {
    return 2016 - el;
} 

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }else{
        return -1;
    }
   
}

                              //passing. Not yet executed
 var ages = arrayCalc(years, calculateAge);
 var fullAges = arrayCalc(ages, isFullAge)
 var rates = arrayCalc(ages, maxHeartRate);
 console.log(ages);
 console.log(fullAges);
 console.log(rates);




//function returning functions

function interviewQs(job) {
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can u please tell me what AJAX is');
        }
    } else if (job === 'teacher'){
        return function(name){
            console.log(name + ', can u please tell me what physics is');
         }

    } else {
    return function(name) {
        console.log(name + ', can u please tell me about urself');
       
    }
 }

}

var teacherQs = interviewQs('teacher');
var designerQs = interviewQs('designer');

teacherQs('john');
designerQs('john');
designerQs('arun');
designerQs('seshan');
interviewQs('teacher')('mark');




function showRoom(bike){
    if(bike === 'yamaha'){
        return function(name){
            console.log(name +'  '+  bike + ' is good sport bike');
        }
    } else if(bike === 'pulsar'){
        return function(name){
            console.log(name +'  '+  bike + ' is good sport bike');
        }
    }
    else {
        return function(name){
            console.log(name +'  '+  bike + '    you *********');
        }
    }
}

var customer = showRoom('yamaha');
customer('Arun');

showRoom('tvs 50') ('siva');



//////////***************///////// */
bind call apply


var john = {
    name :'john',
    age :24,
    job:'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good' + timeOfDay + ', Ladies and gentlemen I\'m  ' + this.name + ', i am a  ' + this.job + '  and I\'m ' + this.age + 'years old.'  );
        } else if (style === 'friendly'){
            console.log('Hey! whats up? I\'m  ' + this.name + ', i am a' + this.job + 'and I\'m ' + this.age + 'years old. have a nice' + timeOfDay + '.')
        }
    }
}
    var emily = {
    name:'emily',
    age:35,
    job:'designer'
     };
    john.presentation('formal','morning')
    john.presentation.call(emily,'friendly' , 'afternoon');
//  john.presentation.apply(emily, ['friendly' ,'afternoon']);
    
    var johnfriendly = john.presentation.bind(john, 'friendly');

     johnfriendly('morning');

    var emilyformal = john.presentation.bind(emily, 'formal');

     emilyformal('Evening');
     


var years = [1990,1965,1937,2005,1998];
       //array values, fn-getting func
function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i=0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//passing the function 
function calculateAge(el) {
    return 2016 - el;
} 

function isFullAge(limit,el){
    return el >= limit;
}

var ages = arrayCalc(years,calculateAge);

var fullJapan = arrayCalc(ages,isFullAge.bind(this,20));
console.log(ages);
console.log(fullJapan);






