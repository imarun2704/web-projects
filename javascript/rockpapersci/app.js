   var answer1, answer2, scores = [0,0] ,i=0,j=1;
  document.querySelector('#btn-roll').addEventListener('click',function() {
    var input;
    var key = ['Rock', 'Paper', 'Sci'];
    answer1 = Math.floor(Math.random() * 3) ;
 
    // document.querySelector('answer').textContent=answer1;
    // document.querySelector('#current-' + activePlayer).textContent = roundScore; 
      
      answer2 = Math.floor(Math.random() * 3) ;
      console.log('sss', answer1, answer2);

      // afterGame(answer1, answer2);
      document.querySelector('#answer1').textContent=key[answer1];
        document.querySelector('#answer2').textContent=key[answer2];

      if(answer1 === 1 && answer2 === 2){
        
        scores[0] =  scores[0] + 1; 
        document.querySelector('#score1').textContent = scores[0];
        
     
      }else if(answer1 === 1 && answer2 === 3){
        // document.querySelector('#answer1').textContent='Rock';
        // document.querySelector('#answer2').textContent='Paper';
         scores[1] =  scores[0] + 1; 
        document.querySelector('#score2').textContent = scores[1];
      }
      else if(answer1 === 2 && answer2 === 1){
        // document.querySelector('#answer1').textContent="Paper";
        // document.querySelector('#answer2').textContent='Rock';
         ent.querySelector('#score1').textContent = scores[0];
        }
        else if(answer1 === 2 && answer2 === 3){
            // document.querySelector('#answer1').textContent='Paper';
            // document.querySelector('#answer2').textContent='Scissors';
            scores[1] =  scores[0] + 1; 
            document.querySelector('#score2').textContent = scores[1];
          }
          else if(answer1 === 3 && answer2 === 1){
            // document.querySelector('#answer1').textContent='scissors';
            // document.querySelector('#answer2').textContent='Rock';
            scores[1] =  scores[0] + 1; 
            document.querySelector('#score2').textContent = scores[1];
          }
          else if(answer1 === 3 && answer2 === 2){
            // document.querySelector('#answer1').textContent='Scissors';
            // document.querySelector('#answer2').textContent='Paper';
            scores[0] =  scores[0] + 1; 
            document.querySelector('#score1').textContent = scores[0];
          }

       
        input = document.querySelector('#finalScore1').value;
          console.log(input);
          var winnningScore;
     
          if(input){
              winnningScore = input;
          }
          else {
              winnningScore = 10;
          }
       
          //check if the player wins
            if(scores[0] >= winnningScore) {
             document.querySelector('#player1').textContent = 'Winner!'; 
             document.querySelector('#player1').classList.add('player1');
             
             document.querySelector('#player2').classList.add('active');
             
           }
            else if(scores[1] >= winnningScore) {
                document.querySelector('#player2').textContent = 'Winner!'; 
                document.querySelector('#player2').classList.add('player1');
              
             document.querySelector('#player2').classList.add('active');
             scores[1] =  scores[0] + 1; 
            } 
     
      
  });

  document.querySelector('#btn-new').addEventListener('click',init);
   
  function init() {
    console.log(scores, '1');
   scores=[0,0];
   document.querySelector('#score1').textContent = scores[0];
   document.querySelector('#score2').textContent = scores[1];
   console.log(scores, '2');
  }

  // function afterGame(answer1, answer2) {
  //   const values = ['rock', 'paper', 'scissors'];
  //   const gameObjects = {
  //     rock:['scissors', 'paper'],
  //     paper:['rock', 'scissors'],
  //     scissors:['paper', 'rock']
  //   };
  //   console.log(values[answer1], values[answer2] ,'outside');
    
  //   const winOrLose = gameObjects[values[answer1]].indexOf(values[answer2]);
  //           document.querySelector('#answer1').textContent=values[answer1];
  //       document.querySelector('#answer2').textContent=values[answer2];
  //   if(winOrLose !== -1) {
  //     if (winOrLose === 0) {
  //       scores[0] =  scores[0] + 1; 
  //       document.querySelector('#score1').textContent = scores[0];
  //     } else if(winOrLose === 1) {
  //       scores[1] =  scores[1] + 1; 
  //       document.querySelector('#score2').textContent = scores[1];
  //     }
  //   } else {
  //     console.log('Not FOund');
  //   }

  // }