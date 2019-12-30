//challenge 1

function Question(question, answer, correct) {

  this.question = question;
  this.answer = answer;
  this.correct = correct;

}

var question1 = new Question("what is your friend's favourite food?", ['pizza', 'sandwich', 'burger'], 1);
var question2 = new Question("what is your friend's favourite song?", ['sorry', 'despacito', 'senorita'], 2);
var question3 = new Question("what is your friend's favourite actor?", ['vijay', 'rajini', 'danush'], 0);


var questions = new Array(question1, question2, question3);

var rightCount = 0;
var wrongCount = 0;
askQuestion();

function askQuestion() {
  var questionNo = Math.floor(Math.random() * 3);

  for (var i = 0; i < questions[questionNo].answer.length; i++) {
    console.log(i + ":" + questions[questionNo].answer[i]);
  }

  var q1;

  q1 = prompt(questions[questionNo].question);

  if (questions[questionNo].correct == q1) {



    console.log("correct answer :) ")
    rightCount++;
    console.log("Correct answer count = " + rightCount);
    console.log("--------------------------------");


  } else {
    console.log("wrong Answer ): ");
    wrongCount++
    console.log("Wrong answer count = " + wrongCount);
    console.log("--------------------------------");
  }


  if (q1 == 5) {
    return;
  } else {
    askQuestion();
  }
}

