//coding challenge1
  var mark = 65 / (1.7 * 1.7) ;
  console.log(mark);
   
  var john = 90 / (1.7 * 1.7) ;
  console.log(john);
   
  bmi = john > mark ;
  console.log('is john\'s bmi higher than mark\'s bmi? ' + bmi);



  //coding challenge2

//   var john = (89 + 120 + 103) / 100 ;
//   var mike = (116 + 94 + 123) / 100 ;
//   var mary = (97 + 134 + 105) / 100 ;
 
// var john = 3;
// var mike = 3 ;
// var mary = 3 ;

//   console.log(john);
//   console.log(mike);
//   console.log(mary);

//   if(john > mike && john > mary) {
//     console.log('john wins' + john);
//   } else if (mike > mary && mike > john ) {
//     console.log('mike wins' + mike);
//   }else if (mary > mike && mary >john) {
//       console.log('mary wins' + mary);
//   }else {
//       console.log('match drawn');
//   }


//function 

function calculateAge(birthYear){

    return  2019 - birthYear  ;

}

  var arun = calculateAge(1997);
  console.log('arun\'s age is ' + arun); 

  // function expression 

  let whatYouDo = function(job,firstName){
      switch(job) {
          case 'teacher':
              return firstName + 'teaches kids how to code';
         default : 
              return firstName + '  drinks beer';
            
      }
  }

  let res = whatYouDo('cricketer','Arun');
  console.log(res);



  // coding challenge
    
    

  function tipCalculator(bill){
       var percentage;
       if(bill< 50){
           percentage = 0.2;
       } else if (bill >=50 && bill >200){
        percentage = 0.15;
       }else {
        percentage = 0.1;
       }
     return percentage * bill;
  }

  var bill = [124,48,268];
  var tips = [tipCalculator(bill[0]),
              tipCalculator(bill[1]),
              tipCalculator(bill[2])];
 
    var finalValue = [bill[0] + tips[0],
                      bill[1] + tips[1],
                      bill[2] + tips[2],];
                      console.log(tips,finalValue);


//coding challenge object


var mark = {
    fullName: 'markZucker',
    mass: 60,
    height: 1.7,
    calcFunc: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }

}

var john = {
    fullName: 'billgates',
    mass: 90,
    height: 1.6,
    calcFunc:function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
}
}

mark.calcFunc();
john.calcFunc();

console.log(mark , john);




var arun = {
    fullName: 'arunkumar',
    bill: [124,48,268,180,42],
    calcTip: function (){

        this.tip = [];
        this.finalValues = [];
        for(var i=0;i<this.bill.length;i++){
          
            var percentage;
            var bill = this.bill[i];
            if(bill[i] < 100){
                pecentage = 0.2;
            } else if (bill[i] > 100 && bill[i] < 300){
                percentage =0.1;
            }else {
               percentage = 0.25;
            }

            this.tip[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
arun.calcTip();
console.log(arun);
   

var mark = {
    fullName: 'markzuckerberg',
    bill: [77,375,110,45],
    calcTip: function (){

        this.tip = [];
        this.finalValues = [];
        for(var i=0;i<this.bill.length;i++){
          
            var percentage;
            var bill = this.bill[i];
            if(bill[i] < 100){
                pecentage = 0.2;
            } else if (bill[i] > 100 && bill[i] < 300){
                percentage =0.1;
            }else {
               percentage = 0.25;
            }

            this.tip[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
function calcAverage(tip) {
    var sum=0;
    for(var i=0;i<tip.length;i++) {
        sum = sum + tip[i];
    }
    return sum / tip.length;
}


mark.calcTip();
mark.average = calcAverage(mark.tip);
console.log(mark);
  
   

//function definition
// function calcAge(year){
//     console.log(2019 - year)
// } 
// calcAge(1947);


//function expression
// var age = function(year){
//  console.log(2019 - year);
// }
// age(1997);

var a = 'hello';
first();

function first(){
    var b = 'hi';
       second();
    function second() {
        var c = 'hey';
        third();
    }
}
function third(){
    var d = 'john';
    console.log(a + d);
}


// console.log(this);

//this keyword
calculatedob(1998);
function calculatedob(year){
    console.log(2016 - year);
    console.log(this);
}


var john = {
    name:'john',
    yearOfBirth:1990,
    calculateAge:function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

       function innerFunction() {
           console.log(this);
       }
       innerFunction();

    }
}
john.calculateAge();


var arun = {
    name: 'Arun',
    yearOfBirth: 1997,

};
arun.calculateAge = john.calculateAge;
arun.calculateAge();




